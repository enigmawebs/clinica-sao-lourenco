import { Link } from "wouter";
import { clinicInfo } from "@/lib/config";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a2528] text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Clínica São Lourenço"
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              O seu bem-estar é a nossa prioridade. Cuidamos da sua saúde com uma equipa experiente, dedicação e um atendimento personalizado.
            </p>
            <div className="flex gap-4">
              <a href={clinicInfo.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={clinicInfo.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>Contactos</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/80 items-start">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{clinicInfo.address}</span>
              </li>
              <li className="flex gap-3 text-white/80 items-center">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col text-sm">
                  <a href={`tel:${clinicInfo.phones[0].replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{clinicInfo.phones[0]}</a>
                  <a href={`tel:${clinicInfo.phones[1].replace(/\s/g, '')}`} className="hover:text-primary transition-colors">{clinicInfo.phones[1]}</a>
                </div>
              </li>
              <li className="flex gap-3 text-white/80 items-center">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="text-sm hover:text-primary transition-colors break-all">
                  {clinicInfo.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Col */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>Horário</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/80 items-start">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">{clinicInfo.hours.weekdays}</span>
              </li>
              <li className="flex gap-3 text-white/80 items-start">
                <Clock className="w-5 h-5 text-primary shrink-0 opacity-0" />
                <span className="text-sm">{clinicInfo.hours.saturday}</span>
              </li>
              <li className="flex gap-3 text-white/80 items-start">
                <Clock className="w-5 h-5 text-primary shrink-0 opacity-0" />
                <span className="text-sm">{clinicInfo.hours.analysis}</span>
              </li>
            </ul>
          </div>

          {/* Links Col */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white" style={{ fontFamily: 'var(--font-display)' }}>Links Úteis</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Início</Link></li>
              <li><Link href="/servicos" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Especialidades</Link></li>
              <li><Link href="/protocolos" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Acordos e Seguros</Link></li>
              <li><Link href="/contactos" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Marcar Consulta</Link></li>
              <li><Link href="/politica-privacidade" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 mt-4"><span className="w-1.5 h-1.5 rounded-full bg-white/30"></span> Política de Privacidade</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} {clinicInfo.name}. Todos os direitos reservados.
          </p>
          <p className="text-white/30 text-xs">
            Feito com carinho para o seu bem-estar.
          </p>
        </div>
      </div>
    </footer>
  );
}
