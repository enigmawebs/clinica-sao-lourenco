import { Link } from "wouter";
import { motion } from "framer-motion";
import { clinicInfo, servicesList, agreementsList } from "@/lib/config";
import { 
  ArrowRight, 
  CalendarCheck, 
  ShieldCheck, 
  Users, 
  Clock, 
  MapPin, 
  Star
} from "lucide-react";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <main className="w-full overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 -z-10 w-full max-w-lg h-[600px] bg-primary/10 rounded-bl-[150px] rounded-tl-[50px] mix-blend-multiply blur-3xl opacity-70 animate-pulse-slow"></div>

        <motion.div 
          className="flex-1 space-y-8 relative z-10"
          initial="hidden"
          animate="show"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-semibold">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
            </span>
            Aberto hoje até às 20h
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-balance leading-[1.1]" style={{ fontFamily: 'var(--font-display)' }}>
            A sua <span className="text-primary relative inline-block">
              saúde
              <svg className="absolute -bottom-2 w-full h-3 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" /></svg>
            </span> em boas mãos, num só lugar.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance leading-relaxed">
            Na Clínica São Lourenço oferecemos um atendimento humano e especializado. Uma equipa médica e dentária dedicada ao seu bem-estar em Brejos de Azeitão.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contactos" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <CalendarCheck className="w-5 h-5" />
              Marcar Consulta
            </Link>
            <a href={`tel:${clinicInfo.phones[0].replace(/\s/g, '')}`} className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-white text-foreground font-bold text-lg border-2 border-border shadow-sm hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300">
              Falar com a Clínica
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 relative w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
        >
          {/* landing page hero modern clinic reception smiling doctor */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-square group">
            <img 
              src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=800&q=80&fit=crop" 
              alt="Médica sorridente" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/50 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Excelência Clínica</p>
                <p className="text-sm text-muted-foreground">Profissionais certificados</p>
              </div>
            </div>
          </div>
        </motion.div>

      </section>

      {/* PORQUE ESCOLHER-NOS */}
      <section className="py-20 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Porquê escolher-nos?</h2>
            <p className="text-muted-foreground text-lg">Cuidamos de si com a dedicação que merece, garantindo conforto, segurança e resultados.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Equipa Dedicada", desc: "Profissionais experientes em constante formação." },
              { icon: ShieldCheck, title: "Atendimento Humano", desc: "Tratamento personalizado, focado nas suas necessidades." },
              { icon: Clock, title: "Horários Alargados", desc: "Abertos até às 20h e com recolha de análises de manhã." },
              { icon: MapPin, title: "Localização Central", desc: "Fácil acesso e estacionamento em Brejos de Azeitão." },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md shadow-black/5 border border-border/50 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">As nossas Especialidades</h2>
              <p className="text-muted-foreground text-lg">Dispomos de uma vasta oferta de cuidados de saúde para responder a todas as suas necessidades num só local.</p>
            </div>
            <Link href="/servicos" className="hidden md:inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors group">
              Ver todos os serviços
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.slice(0, 6).map((service, i) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl border-2 border-muted hover:border-primary bg-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-default"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center text-primary mb-5 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center md:hidden">
            <Link href="/servicos" className="inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-secondary text-primary font-bold shadow-sm hover:bg-primary/10 transition-colors">
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* ACORDOS */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trabalhamos com o seu Seguro</h2>
            <p className="text-white/80 max-w-2xl mx-auto">Temos acordos e protocolos com as principais seguradoras e subsistemas de saúde.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {agreementsList.slice(0, 6).map((acordo, i) => (
              <div key={i} className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-colors font-semibold tracking-wide shadow-lg">
                {acordo.name}
              </div>
            ))}
            <div className="px-6 py-4 rounded-xl border-2 border-dashed border-white/30 text-white/80 font-medium flex items-center justify-center">
              + E muitos outros...
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/protocolos" className="inline-flex justify-center items-center gap-2 text-white font-semibold underline underline-offset-4 hover:text-white/80 transition-colors">
              Consultar lista completa
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">O que dizem os nossos pacientes</h2>
            <p className="text-muted-foreground text-lg">A confiança de quem nos visita é o nosso maior orgulho.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Atendimento impecável desde a receção até ao consultório. Senti-me sempre muito bem acompanhada e esclarecida.", name: "Maria João", role: "Paciente Clínica Geral" },
              { text: "Excelente equipa de medicina dentária. Finalmente perdi o medo de ir ao dentista. Muito profissionais e cuidadosos.", name: "António Silva", role: "Paciente Dentária" },
              { text: "Instalações modernas e limpas. Destaco a facilidade de marcação e a simpatia de todo o staff. Recomendo vivamente!", name: "Catarina Santos", role: "Paciente Frequente" }
            ].map((testimonial, i) => (
              <div key={i} className="bg-secondary/40 p-8 rounded-3xl relative">
                <div className="flex gap-1 text-[#F59E0B] mb-6">
                  {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg text-foreground font-medium mb-8 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
