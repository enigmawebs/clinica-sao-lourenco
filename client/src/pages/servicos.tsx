import { motion } from "framer-motion";
import { servicesList } from "@/lib/config";
import { Link } from "wouter";

export default function Servicos() {
  return (
    <main className="w-full pt-32 pb-24">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Especialidades Médicas
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Na Clínica São Lourenço reunimos uma vasta equipa de especialistas dedicados a cuidar de si e da sua família com o máximo rigor e profissionalismo.
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, i) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">{service.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-24">
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Precisa de marcar uma consulta?</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">A nossa equipa está pronta para o receber e aconselhar o melhor tratamento.</p>
            <Link href="/contactos" className="inline-flex px-8 py-4 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Contactar a Clínica
            </Link>
          </div>
        </div>
      </section>
      
    </main>
  );
}
