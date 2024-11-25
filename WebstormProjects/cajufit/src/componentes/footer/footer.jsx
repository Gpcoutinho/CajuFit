import React from 'react';
import 'tailwindcss/tailwind.css';

const Footer = () => {
    return (
        <footer className="bg-[#333333] text-white py-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo */}
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="text-white-100 text-2xl font-semibold">
                            CajuFit
                        </a>
                    </div>

                    {/* Siga-nos */}
                    <div className="mb-6 md:mb-0">
                        <h6 className="text-lg font-medium mb-4">Siga-nos</h6>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.facebook.com">
                                <img
                                    src="/images/icon_facebook.png"
                                    alt="Facebook"
                                    className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </a>
                            <a href="https://www.instagram.com">
                                <img
                                    src="/images/icon_instagram.png"
                                    alt="Instagram"
                                    className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </a>
                            <a href="https://www.linkedin.com">
                                <img
                                    src="/images/icon_linkedin.png"
                                    alt="LinkedIn"
                                    className="h-8 transition-transform duration-300 ease-in-out hover:scale-110"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Links úteis */}
                    <div className="mb-6 md:mb-0">
                        <h6 className="text-lg font-medium mb-4">Links Úteis</h6>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-grey-400 hover:text-black-100 transition">
                                    Nossos projetos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black-400 hover:text-black-100 transition">
                                    FAQ's
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-black-400 hover:text-black-100 transition">
                                    Notícias e atualizações
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contato */}
                    <div className="mb-6 md:mb-0">
                        <h6 className="text-lg font-medium mb-4">Contato</h6>
                        <address className="text-black-400 not-italic">
                            Rua João da Silva, 123-PB<br />
                            <a href="mailto:cajufit@email.com" className="hover:text-black-100 transition">
                                cajufit@email.com
                            </a><br />
                            <a href="tel:+21345645678" className="hover:text-gray-100 transition">
                                +55 83 91234-5678
                            </a>
                        </address>
                    </div>
                </div>

                {/* Direitos autorais */}
                <div className="text-center mt-6 text-black-500 text-sm">
                    &copy; {new Date().getFullYear()} CajuFit. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
