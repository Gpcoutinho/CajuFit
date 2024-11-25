import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Header() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsAuthenticated(false);
        navigate("/login");
    };

    return (
        <header className="flex justify-between items-center px-6 py-4 bg-[#FF8600] text-white shadow-lg">
            {/* Logo ou link para a página inicial */}
            <Link to="/" className="inline-flex items-center">
                <img
                    src={"images/logo-cajufit.png"}
                    alt="Logo CajuFit"
                    className="h-20 w-auto hover:opacity-80 transition-opacity duration-300 ease-in-out rounded-2xl"
                />
                <h1 className="text-6xl font-extrabold text-[#ffffff] mb-4">
                    CajuFit
                </h1>
            </Link>


            {/* Menu de navegação à direita */}
            <nav className="space-x-4">
                {isAuthenticated ? (
                    <>
                        {/* Botão para acessar o Dashboard */}
                        <Link
                            to="/dashboard"
                            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500">
                            Dashboard
                        </Link>

                        {/* Quando o usuário estiver logado, exibir o botão de perfil e o botão de logout */}
                        <Link
                            to="/profile"
                            className="inline-flex items-center px-4 py-2 bg-white text-[#333333] rounded-lg hover:bg-gray-600 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <span className="mr-2">Meu Perfil</span>
                            <img
                                src="/images/icon-pessoa.png"
                                alt="Ícone do Perfil"
                                className="h-6 w-6"
                            />
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="inline-block px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        {/* Caso não esteja logado, exibir os botões de login e registro */}
                        <Link
                            to="/register"
                            className="inline-block px-4 py-2 bg-[#333333] text-white rounded-lg hover:bg-[#96c049] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500">
                            Registre-se!
                        </Link>
                        <Link
                            to="/login"
                            className="inline-block px-4 py-2 bg-[#333333] text-white rounded-lg hover:bg-[#96c049] transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500">
                            Login
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;
