import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [passwordForm, setPasswordForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem("authToken");

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setUserData(response.data[0]);
      } catch (error) {
        setError("Erro ao carregar informações do usuário.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [token, navigate]);

  // Função para lidar com a alteração de senha
  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const { newPassword, confirmPassword } = passwordForm;

    // Validações simples de senha
    if (newPassword !== confirmPassword) {
      setPasswordError("As senhas não coincidem.");
      return;
    }

    if (newPassword.length < 8) {
      setPasswordError("A senha deve ter pelo menos 8 caracteres.");
      return;
    }

    try {
      // Requisição para alterar a senha do usuário
      const response = await axios.put(
        ``,
        { password: newPassword, username: userData.username },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setSuccessMessage("Senha alterada com sucesso.");
      setPasswordForm({ newPassword: "", confirmPassword: "" });
      setPasswordError("");
    } catch (error) {
      setPasswordError(
        error.response?.data?.detail || "Erro ao tentar alterar a senha."
      );
    }
  };

  // Função para lidar com mudanças nos inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm((prevState) => ({ ...prevState, [name]: value }));
  };

  if (isLoading) {
    return <p>Carregando informações...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="min-h-screen bg-[#F3E9D2] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <UserInfoSection userData={userData} />
        <PasswordChangeSection
          passwordForm={passwordForm}
          onChange={handleInputChange}
          onSubmit={handlePasswordChange}
          passwordError={passwordError}
          successMessage={successMessage}
        />
      </div>
    </div>
  );
};

// Componente para exibir informações do usuário
const UserInfoSection = ({ userData }) => (
  <section className="p-8 bg-[#F3E9D2] rounded-lg shadow flex flex-col items-center">
    <h2 className="text-2xl font-semibold text-[#333333] text-center mb-4">
      Informações da Conta
    </h2>
    <div className="space-y-2 text-left">
      <p>
        <strong>ID:</strong> {userData.id}
      </p>
      <p>
        <strong>Usuário:</strong> {userData.username}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      {userData.categorias && userData.categorias.length > 0 && (
        <p>
          <strong>Categorias:</strong>{" "}
          {userData.categorias.map((cat) => cat.nome).join(", ")}
        </p>
      )}
      {userData.first_name && (
        <p>
          <strong>Nome:</strong> {userData.first_name}
        </p>
      )}
      {userData.last_name && (
        <p>
          <strong>Sobrenome:</strong> {userData.last_name}
        </p>
      )}
    </div>
  </section>
);

// Componente para o formulário de alteração de senha
const PasswordChangeSection = ({
  passwordForm,
  onChange,
  onSubmit,
  passwordError,
  successMessage,
}) => (
  <section className="p-8 bg-[#F3E9D2] rounded-lg shadow flex flex-col items-center">
    <h2 className="text-2xl font-semibold text-[#333333] text-center">
      Trocar Senha
    </h2>
    <form onSubmit={onSubmit} className="space-y-4 w-full">
      <div>
        <label
          htmlFor="newPassword"
          className="block text-sm font-medium text-[#333333]"
        >
          Nova Senha
        </label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={passwordForm.newPassword}
          onChange={onChange}
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-[#a7c95e] focus:border-[#24597f]"
          required
        />
      </div>
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-sm font-medium text-[#333333]"
        >
          Confirme a Nova Senha
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={passwordForm.confirmPassword}
          onChange={onChange}
          className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm focus:ring-[#a7c95e] focus:border-[#24597f]"
          required
        />
      </div>
      {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
      <button
        type="submit"
        className="w-full py-2 bg-[#333333] text-white font-semibold rounded hover:bg-[#96c049] transition duration-300"
      >
        Alterar Senha
      </button>
      {successMessage && (
        <p className="text-green-500 text-sm mt-2">{successMessage}</p>
      )}
    </form>
    <p className="text-gray-600 text-sm mt-2">
      * Sua nova senha deve ter pelo menos 8 caracteres, incluindo letras e
      números.
    </p>
  </section>
);

export default Profile;
