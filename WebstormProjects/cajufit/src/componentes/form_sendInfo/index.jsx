import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        telefone: '',
        rua: '',
        complemento: '',
        email: ''
    });

    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {

            await axios.post('', formData);
            setMessage('Formulário enviado com sucesso!');
        } catch (error) {
            setMessage('Houve um erro ao enviar o formulário.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-[#F3E9D2] text-[#2b404e] min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
                <h1 className="text-3xl font-bold text-[#344c5a] mb-6">Envie suas Informações</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#a7c95e] focus:border-[#a7c95e]"
                        />
                    </div>

                    <div>
                        <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700">
                            Sobrenome
                        </label>
                        <input
                            type="text"
                            id="sobrenome"
                            name="sobrenome"
                            value={formData.sobrenome}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#a7c95e] focus:border-[#a7c95e]"
                        />
                    </div>

                    <div>
                        <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
                            Telefone
                        </label>
                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            value={formData.telefone}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#a7c95e] focus:border-[#a7c95e]"
                        />
                    </div>

                    <div>
                        <label htmlFor="rua" className="block text-sm font-medium text-gray-700">
                            Rua
                        </label>
                        <input
                            type="text"
                            id="rua"
                            name="rua"
                            value={formData.rua}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#a7c95e] focus:border-[#a7c95e]"
                        />
                    </div>

                    <div>
                        <label htmlFor="complemento" className="block text-sm font-medium text-gray-700">
                            Complemento
                        </label>
                        <input
                            type="text"
                            id="complemento"
                            name="complemento"
                            value={formData.complemento}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#a7c95e] focus:border-[#a7c95e]"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#a7c95e] focus:border-[#a7c95e]"
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-[#ff8600] text-white px-6 py-3 rounded-lg hover:bg-[#96c049] text-white font-semibold py-2 px-4 rounded transition duration-300 hover:scale-105"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Enviando...' : 'Enviar'}
                        </button>
                    </div>
                </form>

                {message && (
                    <p className="mt-4 text-center text-sm text-[#2b404e]">
                        {message}
                    </p>
                )}
            </div>
        </div>
    );
}

export default ContactForm;
