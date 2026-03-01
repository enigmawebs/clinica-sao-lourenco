import { motion } from "framer-motion";
import { agreementsList } from "@/lib/config";
import { Shield, Info } from "lucide-react";

export default function Protocolos() {
  return (
    <main className="w-full pt-32 pb-24 bg-slate-50/50 min-h-screen">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 mx-auto bg-primary/10 text-primary rounded-full flex items-center justify-center mb-6">
            <Shield className="w-10 h-10" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Acordos e Protocolos
          </h1>
          <p className="text-lg text-muted-foreground">
            Trabalhamos em parceria com as principais seguradoras e subsistemas de saúde para lhe garantir acesso facilitado aos nossos cuidados.
          </p>
        </motion.div>
      </section>

      {/* Agreements Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {agreementsList.map((acordo, i) => (
            <motion.div 
              key={acordo.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-border shadow-sm flex flex-col items-center justify-center text-center hover:border-primary hover:shadow-md transition-all h-32"
            >
              <h3 className="text-xl font-bold text-foreground mb-1">{acordo.name}</h3>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{acordo.type}</span>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 bg-blue-50 border border-blue-100 p-6 rounded-2xl flex gap-4 items-start"
        >
          <Info className="w-6 h-6 text-blue-500 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-blue-900 mb-1">Não encontra o seu seguro?</h4>
            <p className="text-blue-800/80 text-sm">
              Temos outros acordos disponíveis e em constante atualização. Por favor, contacte a nossa receção para confirmar as condições de cobertura para o seu caso específico ou especialidade pretendida.
            </p>
          </div>
        </motion.div>
      </section>
      
    </main>
  );
}
