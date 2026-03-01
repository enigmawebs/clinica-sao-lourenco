import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type ContactInput } from "@shared/routes";
import { useSubmitContact } from "@/hooks/use-contact";
import { clinicInfo } from "@/lib/config";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contactos() {
  const [isSuccess, setIsSuccess] = useState(false);
  const mutation = useSubmitContact();

  const form = useForm<ContactInput>({
    resolver: zodResolver(api.contact.create.input),
    defaultValues: {
      name: "",
      emailOrPhone: "",
      subject: "",
      message: "",
      consent: false,
    }
  });

  const onSubmit = (data: ContactInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        setIsSuccess(true);
        form.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    });
  };

  return (
    <main className="w-full pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold mb-4" 
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Fale Connosco
          </motion.h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para o ajudar. Marque a sua consulta ou esclareça qualquer dúvida com a nossa equipa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Left Col: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white p-8 rounded-3xl border border-border shadow-sm space-y-8">
              
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Contactos</h3>
                <ul className="space-y-6">
                  <li className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Telefones</p>
                      <a href={`tel:${clinicInfo.phones[0].replace(/\s/g, '')}`} className="block text-muted-foreground hover:text-primary transition-colors">{clinicInfo.phones[0]}</a>
                      <a href={`tel:${clinicInfo.phones[1].replace(/\s/g, '')}`} className="block text-muted-foreground hover:text-primary transition-colors">{clinicInfo.phones[1]}</a>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a href={`mailto:${clinicInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors break-all">{clinicInfo.email}</a>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Morada</p>
                      <p className="text-muted-foreground">{clinicInfo.address}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Horário</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-muted-foreground items-start">
                    <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{clinicInfo.hours.weekdays}</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground items-start">
                    <Clock className="w-5 h-5 text-primary shrink-0 opacity-0" />
                    <span>{clinicInfo.hours.saturday}</span>
                  </li>
                  <li className="flex gap-3 text-muted-foreground items-start">
                    <Clock className="w-5 h-5 text-primary shrink-0 opacity-0" />
                    <span>{clinicInfo.hours.analysis}</span>
                  </li>
                </ul>
              </div>

            </div>
          </motion.div>

          {/* Right Col: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-border shadow-lg">
              <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>Envie-nos uma mensagem</h2>
              
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 text-green-800 rounded-xl border border-green-200 flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                  <p className="font-medium">Mensagem enviada com sucesso! Entraremos em contacto brevemente.</p>
                </div>
              )}

              {mutation.isError && (
                <div className="mb-6 p-4 bg-red-50 text-red-800 rounded-xl border border-red-200 flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                  <p className="font-medium">{mutation.error.message || "Ocorreu um erro ao enviar. Tente novamente."}</p>
                </div>
              )}

              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-sm font-semibold text-foreground">Nome completo</label>
                  <input 
                    id="name"
                    {...form.register("name")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${form.formState.errors.name ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} outline-none focus:ring-4 transition-all`}
                    placeholder="O seu nome"
                  />
                  {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="emailOrPhone" className="text-sm font-semibold text-foreground">Email ou Telefone</label>
                  <input 
                    id="emailOrPhone"
                    {...form.register("emailOrPhone")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${form.formState.errors.emailOrPhone ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} outline-none focus:ring-4 transition-all`}
                    placeholder="Como prefere ser contactado?"
                  />
                  {form.formState.errors.emailOrPhone && <p className="text-red-500 text-xs mt-1">{form.formState.errors.emailOrPhone.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-sm font-semibold text-foreground">Assunto</label>
                  <select 
                    id="subject"
                    {...form.register("subject")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${form.formState.errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} outline-none focus:ring-4 transition-all appearance-none`}
                  >
                    <option value="">Selecione o assunto...</option>
                    <option value="Marcação de Consulta">Marcação de Consulta</option>
                    <option value="Informações/Dúvidas">Informações / Dúvidas</option>
                    <option value="Acordos e Seguros">Acordos e Seguros</option>
                    <option value="Outro">Outro assunto</option>
                  </select>
                  {form.formState.errors.subject && <p className="text-red-500 text-xs mt-1">{form.formState.errors.subject.message}</p>}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-sm font-semibold text-foreground">Mensagem</label>
                  <textarea 
                    id="message"
                    rows={4}
                    {...form.register("message")}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-50 border ${form.formState.errors.message ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-primary focus:ring-primary/20'} outline-none focus:ring-4 transition-all resize-none`}
                    placeholder="Escreva a sua mensagem aqui..."
                  />
                  {form.formState.errors.message && <p className="text-red-500 text-xs mt-1">{form.formState.errors.message.message}</p>}
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <div className="flex items-center h-5">
                    <input 
                      id="consent" 
                      type="checkbox" 
                      {...form.register("consent")}
                      className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/30"
                    />
                  </div>
                  <label htmlFor="consent" className="text-sm text-muted-foreground leading-tight cursor-pointer">
                    Concordo com a recolha dos meus dados para efeitos de contacto, conforme a <a href="/politica-privacidade" className="text-primary underline">Política de Privacidade</a>.
                  </label>
                </div>
                {form.formState.errors.consent && <p className="text-red-500 text-xs">{form.formState.errors.consent.message}</p>}

                <button 
                  type="submit"
                  disabled={mutation.isPending}
                  className="w-full mt-6 px-6 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold text-lg flex justify-center items-center gap-2 transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {mutation.isPending ? (
                    "A enviar..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>

              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl overflow-hidden shadow-lg border border-border h-[400px]"
        >
          <iframe 
            src={clinicInfo.mapUrl} 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da Clínica São Lourenço no Google Maps"
          ></iframe>
        </motion.div>

      </div>
    </main>
  );
}
