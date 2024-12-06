import React from "react";
import cardsfisico from "../assets/cards-fisico.png";
import imagemlivro from "../assets/imagem-livro.png";
import nica from "../assets/nica.png";

const projects = [
  {
    id: 1,
    name: "Cards Neuropsicológicos Físicos",
    tipo: "Mídia Física",
    image: cardsfisico,
    visitar: "https://www.amazon.com.br/Netters-Neuroscience-Flash-Cards-3e/dp/0323401562",
  },
  {
    id: 2,
    name: "Tabela de Avaliação de Risco Emocional",
    tipo: "Mídia Física",
    image: imagemlivro,
    visitar: "https://www.amazon.com.br/Netters-Neuroscience-Flash-Cards-3e/dp/0323401562",
  },
  {
    id: 3,
    name: "Nicalabs, transformando suas ideias em realidade",
    tipo: "Mídia Digital",
    image: nica,
    visitar: "https://www.amazon.com.br/NeuroDigital-Future-Mental-Health-Care/dp/B0D6LR7LNJ",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Complete sua experiência, com os nossos produtos!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.tipo}</p>
              <a href={project.visitar} className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" 
              rel="noopener noreferrer">visitar</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
