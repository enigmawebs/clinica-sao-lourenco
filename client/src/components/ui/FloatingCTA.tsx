import { MessageCircle } from "lucide-react";
import { clinicInfo } from "@/lib/config";
import { motion } from "framer-motion";

export function FloatingCTA() {
  const whatsappUrl = `https://wa.me/${clinicInfo.whatsapp}?text=Olá!%20Gostaria%20de%20marcar%20uma%20consulta%20na%20Clínica%20São%20Lourenço.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
    >
      <MessageCircle className="w-7 h-7" />
      
      {/* Ping animation indicator */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
    </motion.a>
  );
}
