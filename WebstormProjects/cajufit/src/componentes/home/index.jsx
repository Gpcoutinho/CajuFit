import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tailwindcss/tailwind.css";

const Home = () => {
  const [carouselItems] = useState([
    {
      id: 1,
      image: "images/unidade_tambau.png",
      alt: "Ambientes Modernos e Funcionais",
      description: "Toda a estrutura e equipamentos que você precisa para fazer seu treino.",
      buttonText: "Saiba Mais",
      link: "/products",
    },
    {
      id: 2,
      image: "images/professor.png",
      alt: "Variedade de modalidades",
      description:
        "Diversifique seu treino com diversas modalidades. Na CajuFit, oferecemos opções para todos os gostos e objetivos.",
      buttonText: "Saiba Mais",
      link: "/products",
    },
    {
      id: 3,
      image: "images/aplicativo.png",
      alt: "Conecte-se com a academia",
      description: "Acompanhe seus treinos e progresso ao longo do tempo.",
      buttonText: "Saiba Mais",
      link: "/products",
    },
  ]);

  return (
    <main className="bg-[#F3E9D2] text-[#373435]">
      {/* Seção de Introdução */}
      <section className="py-12 text-center bg-gradient-to-r from-[#F3E9D2] to-[#F3E9D2] shadow-lg">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-[#FF8600] mb-4">
            O jeito brasileiro de ser fit.
          </h1>
          <h3 className="text-4xl text-[#333333] font-semibold mb-4">
            Só a CajuFit reúne tudo que você precisa para não ter mais desculpas para não ir treinar:            
          </h3>
          <p className="mt-4 text-lg text-[#333333] leading-relaxed max-w-md mx-auto">
            Academias espalhadas por todo Brasil, abertas 24h, todos os dias da semana e com mais de 30 modalidades diferentes por um preço acessível. Escolha como, onde e quando se movimentar!
          </p>
        </div>
        <a href="#plans">
          <button className="mt-6 px-8 py-3 bg-[#FF8600] text-gray-900 rounded-full shadow-lg hover:bg-[#96c049] transition-transform duration-300 transform hover:scale-105">
            Ver Planos
          </button>
        </a>
      </section>

      {/* Carrossel de Produtos */}
      <section className="container mx-auto px-4 py-8 max-w-4xl">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={9000}
          className="shadow-lg rounded-lg overflow-hidden"
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="relative group">
              <img
                src={item.image}
                alt={item.alt}
                className="object-cover w-full h-[500px] max-h-[1500px] transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-[#ff8600] text-4xl font-semibold mb-3">
                  {item.alt}
                </h3>
                <p className="text-gray-300 mb-4 text-center px-4">
                  {item.description}
                </p>
                <a href={item.link} className="mt-4">
                  <button className="px-8 py-3 bg-[#FF8600] text-gray-900 rounded-full shadow-lg hover:bg-[#96c049] transition">
                    {item.buttonText}
                  </button>
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Seção de Informações sobre a Empresa */}
      <section className="py-12 bg-gradient-to-r from-[#B4C79C] to-[#B4C79C] text-center text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8">
            Por que se matricular?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#96c049] shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
              <img
                src="images/muscle-icon.png"
                alt="Ícone de músculo"
                className="mb-4 w-16 h-16"
              />
              <h4 className="text-xl font-semibold text-gray-900">
                Equipamentos de Alto Padrão
              </h4>
              <p className="text-gray-800 mt-2">
                Saúde, Bem-estar e Tecnologia.
              </p>
            </div>

            <div className="bg-[#accc6b] shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
              <img
                src="images/high-five.png"
                alt="Ícone de High Five"
                className="mb-4 w-16 h-16"
              />
              <h4 className="text-xl font-semibold text-gray-900">
                Comunidade Ativa e Inclusiva
              </h4>
              <p className="text-gray-800 mt-2">
                Um espaço acolhedor para todos, onde saúde e conexão se encontram.
              </p>
            </div>

            <div className="bg-[#ff8600] shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
              <img
                src="images/sheepskin.png"
                alt="Ícone de Diploma"
                className="mb-4 w-16 h-16"
              />
              <h4 className="text-xl font-semibold text-gray-900">
                Instrutores Especializados
              </h4>
              <p className="text-gray-800 mt-2">
                Conte com nossa equipe de instrutores especializados, prontos para orientar e motivar você em cada sessão. 

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Planos */}
      <section id="plans" className="py-10 bg-[#F3E9D2]">
        <div className="container mx-auto px-4">
          <h3 className="text-center text-4xl font-bold mb-8 text-[#333333]">
            Conheça Nossos Planos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            <div className="flex flex-col h-[520px] items-start p-6 border border-[#24597f] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-200">
              <h5 className="text-4xl font-bold text-[#FF8600] text-left w-full">Plano Básico</h5>
              <h5 className="text-3xl !text-3xl font-bold text-[#333333] text-left w-full mb-6">R$49,90</h5>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Sem restrição de horários
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Aulas e treinos personalizados
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Acesso total a estrutura da academia
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Sem multas ou taxas de cancelamento
              </p>
              
              <div className="mt-auto w-full">
                <Link to="/sendForm">
                  <button className="px-8 py-3 bg-[#FF8600] text-gray-900 rounded-full hover:bg-[#96c049] transition duration-300 transform hover:scale-105">
                    Escolher este plano
                  </button>
                </Link>
              </div>              
            </div>
            
            <div className="flex flex-col h-[520px] items-start p-6 border border-[#24597f] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-200">
              <h5 className="text-4xl font-bold text-[#FF8600] text-left w-full">Plano Intermediário</h5>
              <h5 className="text-3xl !text-3xl font-bold text-[#333333] text-left w-full mb-6">R$79,90</h5>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Sem restrição de horários
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Aulas e treinos personalizados
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Acesso total a estrutura da academia
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Sem multas ou taxas de cancelamento
              </p>
              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Acompanhamento do progresso de treino
              </p>          
              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Treino em todas as unidades CajuFit
              </p>
              <div className="mt-auto w-full">
                <Link to="/sendForm">
                  <button className="px-8 py-3 bg-[#FF8600] text-gray-900 rounded-full hover:bg-[#96c049] transition duration-300 transform hover:scale-105">
                    Escolher este plano
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col h-[520px] items-start p-6 border border-[#24597f] bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-200">
              <h5 className="text-4xl font-bold text-[#FF8600] text-left w-full">Plano Tudão</h5>
              <h5 className="text-3xl !text-3x1 font-bold text-[#333333] text-left w-full mb-6">R$99,90</h5>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Sem restrição de horários
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Aulas e treinos personalizados
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Acesso total a estrutura da academia
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Sem multas ou taxas de cancelamento
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Acompanhamento do progresso de treino
              </p>  

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Treino em todas as unidades CajuFit
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Direito a 5 convidados por mês
              </p>

              <p className="flex items-center text-xl text-[#373435] text-left w-full mb-3">
                <img src="/images/check.png" alt="Check" className="h-6 w-6 mr-2"/>
                Taxa zero
              </p>
              <div className="mt-auto w-full">
                <Link to="/sendForm">
                  <button className="px-8 py-3 bg-[#FF8600] text-gray-900 rounded-full hover:bg-[#96c049] transition duration-300 transform hover:scale-105">
                    Escolher este plano
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
