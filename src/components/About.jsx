import React from "react";
import cardsimage from "../assets/aboutme-image.jpg";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Sobre Nós</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={cardsimage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
            Os Cards Neuropsicológicos são uma ferramenta inovadora criada para apoiar psicólogos e terapeutas em suas sessões e também para promover reflexões individuais dos pacientes. Cada card contém frases cuidadosamente elaboradas que abordam temas como ansiedade, depressão e outros desafios emocionais do dia a dia.

Para os profissionais de saúde mental, os cards oferecem uma abordagem prática e interativa, ajudando a estimular o diálogo, identificar questões emocionais e criar um espaço de acolhimento. Durante as sessões, os terapeutas podem utilizar os cards para guiar conversas profundas e promover insights valiosos que facilitam o processo terapêutico.

Já para os pacientes, o aplicativo permite um uso autônomo e reflexivo. Eles podem explorar os cards, identificar frases com as quais mais se conectam e trazer essas percepções para a terapia. Esse recurso ajuda no autoconhecimento e no fortalecimento do vínculo entre paciente e terapeuta, tornando o processo de cuidado ainda mais eficaz.

Os Cards Neuropsicológicos unem tecnologia e saúde mental, oferecendo uma solução acessível e prática para o bem-estar emocional.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Interação com seu paciente
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Praticidade
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  Acessibilidade
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        3+
                    </h3>
                    <p>Decks</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        50+
                    </h3>
                    <p>Consultas com o app</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        10+
                    </h3>
                    <p>Psicólogos recomendam</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
