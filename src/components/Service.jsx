

const services = [
  {
    id: 1,
    title: "Reflexão Guiada",
    description: "Ajude seus pacientes a refletirem sobre seus desafios com frases cuidadosamente elaboradas.",
  },
  {
    id: 2,
    title: "Ferramenta para Sessões",
    description: "Torne suas sessões mais interativas e produtivas com o uso dos cards temáticos.",
  },
  {
    id: 3,
    title: "Autoconhecimento Individual",
    description: "Permita que pacientes explorem os cards autonomamente, promovendo insights pessoais.",
  },
  {
    id: 4,
    title: "Integração com Terapias",
    description: "Combine os cards com diferentes abordagens terapêuticas para resultados mais eficazes.",
  },
  {
    id: 5,
    title: " Simplicidade e Acessibilidade",
    description: "Uma interface intuitiva que facilita o uso tanto por profissionais quanto por pacientes.",
  },
  {
    id: 6,
    title: "Saúde Mental na Palma da Mão",
    description: "Leve inovação e tecnologia para sua prática com o Cards Neuropsicológicos.",
  },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Não fique de fora do maior app psicólogico do Brasil</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Saiba mais</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
