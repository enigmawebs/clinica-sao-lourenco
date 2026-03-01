import { 
  Stethoscope, 
  Baby, 
  Apple, 
  BrainCircuit, 
  Ear, 
  Footprints, 
  HeartHandshake, 
  Syringe, 
  TestTube, 
  Bone, 
  Sparkles, 
  Hand,
  Smile
} from "lucide-react";

export const clinicInfo = {
  name: "Clínica São Lourenço",
  subtitle: "Clínica Médica e Dentária",
  address: "Rua Ana de Castro Osório, 20, Brejos de Azeitão",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.8286950275815!2d-9.0180429!3d38.5838575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1947e2ccbf6fdf%3A0x6b77265ebbd14151!2sBrejos%20de%20Azeit%C3%A3o!5e0!3m2!1spt-PT!2spt!4v1700000000000!5m2!1spt-PT!2spt",
  phones: ["21 219 93 57", "96 647 92 55"],
  whatsapp: "351966479255", // Formatted for the API link
  email: "saolourencoclinica@gmail.com",
  website: "www.saolourencoclinica.com",
  hours: {
    weekdays: "Segunda a sexta: 9h às 20h",
    saturday: "Sábados: 9h às 13h",
    analysis: "Análises: 2ª a 6ª entre as 8h e as 11h"
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  }
};

export const servicesList = [
  { id: "medicina-dentaria", title: "Medicina Dentária", icon: Smile, description: "Cuidamos do seu sorriso com os tratamentos mais avançados e uma equipa especializada." },
  { id: "clinica-geral", title: "Clínica Geral", icon: Stethoscope, description: "Acompanhamento médico global para si e para a sua família em todas as fases da vida." },
  { id: "pediatria", title: "Pediatria", icon: Baby, description: "Cuidado especializado para o desenvolvimento saudável e feliz das crianças." },
  { id: "nutricao", title: "Nutrição", icon: Apple, description: "Planos alimentares personalizados para promover a sua saúde e bem-estar." },
  { id: "psicologia", title: "Psicologia Clínica", icon: BrainCircuit, description: "Apoio emocional e psicológico para enfrentar os desafios da vida." },
  { id: "psicologia-infantil", title: "Psicologia Infantil", icon: BrainCircuit, description: "Avaliação e intervenção focada no bem-estar psicológico das crianças." },
  { id: "terapia-fala", title: "Terapia da Fala", icon: Ear, description: "Prevenção, avaliação e tratamento das perturbações da comunicação humana." },
  { id: "podologia", title: "Podologia", icon: Footprints, description: "Diagnóstico e tratamento das patologias do pé para caminhar com saúde." },
  { id: "saude-materna", title: "Saúde Materno-Infantil", icon: HeartHandshake, description: "Acompanhamento dedicado à grávida, recém-nascido e família." },
  { id: "enfermagem", title: "Enfermagem", icon: Syringe, description: "Cuidados de enfermagem humanizados, pensos, injetáveis e muito mais." },
  { id: "analises", title: "Análises Clínicas", icon: TestTube, description: "Serviço de colheitas rápido e eficiente para diagnósticos precisos." },
  { id: "osteopatia", title: "Osteopatia", icon: Bone, description: "Abordagem terapêutica manual focada na recuperação do equilíbrio do corpo." },
  { id: "acupunctura", title: "Acupunctura Clínica", icon: Sparkles, description: "Técnica milenar para alívio da dor e promoção do bem-estar global." },
  { id: "shiatsu", title: "Shiatsu", icon: Hand, description: "Terapia de massagem japonesa para relaxamento profundo e reequilíbrio energético." },
];

export const agreementsList = [
  { name: "Multicare", type: "Seguro de Saúde" },
  { name: "AdvanceCare", type: "Rede Médica" },
  { name: "Saúde Prime", type: "Plano de Saúde" },
  { name: "Mundial Assistance", type: "Seguro" },
  { name: "Future Healthcare", type: "Rede Médica" },
  { name: "iSport City", type: "Parceria" },
  { name: "Saúde Global", type: "Plano de Saúde" },
  { name: "Medicare", type: "Plano de Saúde" },
  { name: "PlanusCard", type: "Cartão de Saúde" }
];
