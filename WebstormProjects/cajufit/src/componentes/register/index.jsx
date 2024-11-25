import styles from "./scroll.module.css";
import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        category: 'id',
    });

    const [errors, setErrors] = useState({});
    const [nonFieldErrors, setNonFieldErrors] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.username) newErrors.username = 'O campo de usuário é obrigatório.';
        if (!formData.password) newErrors.password = 'O campo de senha é obrigatório.';
        if (!formData.category) newErrors.category = 'Selecione uma categoria.';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrors({});

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }


        const categoryList = formData.category.split(',').map(Number);

        setIsSubmitting(true);
        try {
            const response = await axios.post('https://1e70-45-228-146-95.ngrok-free.app/', {
                username: formData.username,
                password: formData.password,
                category: categoryList
            });
            setSuccessMessage('Registro realizado com sucesso!');
            console.log('Registro bem-sucedido:', response.data);
        } catch (error) {
            if (error.response) {
                setErrors(error.response.data.errors || {});
                setNonFieldErrors(error.response.data.non_field_errors || 'Erro ao tentar registrar.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#F3E9D2' }}>
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="w-full max-w-md pt-12 rounded-lg shadow-2xl" style={{ backgroundColor: '#FF8600', boxShadow: '0 11px 12px rgba(0, 0, 0, 1)' }}>
                        <div className="bg-white p-8">
                            <div className="text-center mb-4">
                                <h1 className="text-2xl font-semibold">Crie sua conta!</h1>
                                <hr className="my-4" />
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {successMessage && (
                                    <p className="text-green-500 text-sm">{successMessage}</p>
                                )}
                                <div className="mb-4">
                                    <label htmlFor="username" className="block text-sm font-bold text-gray-700">
                                        Usuário
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        placeholder="Digite seu nome de usuário"
                                        value={formData.username}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full px-3 py-2 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                    />
                                    {errors.username && (
                                        <p className="text-red-500 text-sm mt-2">{errors.username}</p>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="category" className="block text-sm font-bold text-gray-700">
                                        Categoria
                                    </label>
                                    <select
                                        name="category"
                                        id="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className={`${styles.customScroll} mt-2 w-full block border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 p-2`}
                                    >
                                        <option value="1">Professor-Lab01</option>
                                        <option value="2">Professor-Lab02</option>
                                        <option value="3">Professor-Lab03</option>
                                        <option value="4">Reitor</option>
                                        <option value="5">Aluno</option>
                                    </select>
                                    {errors.category && (
                                        <p className="text-red-500 text-sm mt-2">{errors.category}</p>
                                    )}
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-bold text-gray-700">
                                        Senha
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        name="password"
                                        placeholder="Digite sua senha"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className={`mt-1 block w-full px-3 py-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-sm mt-2">{errors.password}</p>
                                    )}
                                </div>

                                {nonFieldErrors && (
                                    <div className="alert alert-danger">
                                        <p className="text-red-500 text-sm">{nonFieldErrors}</p>
                                    </div>
                                )}

                                <div className="form-content">
                                    <button
                                        type="submit"
                                        className="w-full bg-[#333333] hover:bg-[#96c049] text-white font-semibold py-2 px-4 rounded transition duration-300 hover:scale-105"
                                        
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Criar'}
                                    </button>
                                </div>
                            </form>

                        </div>
                        <div className="flex items-center justify-center text-white h-16 shadow-2xl" style={{ backgroundColor: '#FF8600' }}>
                            <p>© 2024 CajuFit</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default RegisterForm;
