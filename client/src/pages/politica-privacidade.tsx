import { clinicInfo } from "@/lib/config";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function PoliticaPrivacidade() {
  return (
    <main className="w-full pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/" className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8">
          <ArrowLeft className="w-4 h-4" />
          Voltar ao início
        </Link>

        <h1 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Política de Privacidade</h1>
        <p className="text-muted-foreground mb-10 pb-10 border-b border-border">Última atualização: {new Date().toLocaleDateString('pt-PT', { month: 'long', year: 'numeric' })}</p>
        
        <div className="prose prose-slate prose-headings:font-display prose-headings:text-foreground prose-a:text-primary max-w-none">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8 text-sm text-yellow-800">
            <strong>Nota:</strong> Este é um texto genérico gerado como demonstração. A política de privacidade final deve ser revista e aprovada por um profissional jurídico/DPO para garantir conformidade legal com o RGPD (Regulamento Geral sobre a Proteção de Dados).
          </div>

          <p>A <strong>{clinicInfo.name}</strong> compromete-se a proteger a privacidade e os dados pessoais dos seus utentes e utilizadores do website, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD).</p>

          <h2>1. Recolha e Tratamento de Dados Pessoais</h2>
          <p>Os dados pessoais recolhidos através do nosso website, nomeadamente via formulário de contacto, são os estritamente necessários para a finalidade a que se destinam:</p>
          <ul>
            <li>Nome</li>
            <li>Contacto telefónico ou email</li>
            <li>Assunto e mensagem</li>
          </ul>
          <p>Estes dados são utilizados exclusivamente para responder às suas questões, efetuar marcações de consultas e prestar as informações solicitadas.</p>

          <h2>2. Finalidade e Base de Licitude</h2>
          <p>O tratamento dos seus dados baseia-se no seu consentimento expresso (ao submeter o formulário) ou na necessidade de diligências pré-contratuais (para marcação de consultas).</p>

          <h2>3. Conservação dos Dados</h2>
          <p>Os dados pessoais recolhidos serão conservados apenas durante o período estritamente necessário para a finalidade para a qual foram recolhidos ou, caso exista uma relação clínica, pelos prazos legalmente exigidos.</p>

          <h2>4. Transmissão a Terceiros</h2>
          <p>A {clinicInfo.name} não partilha os seus dados pessoais com entidades terceiras, exceto quando estritamente necessário para a prestação do serviço clínico ou por imposição legal.</p>

          <h2>5. Os seus Direitos</h2>
          <p>Nos termos do RGPD, o utilizador tem o direito de solicitar:</p>
          <ul>
            <li>O acesso aos dados pessoais que lhe digam respeito;</li>
            <li>A sua retificação ou apagamento;</li>
            <li>A limitação do tratamento;</li>
            <li>O direito de se opor ao tratamento;</li>
            <li>O direito à portabilidade dos dados.</li>
          </ul>
          <p>Para exercer os seus direitos, ou se tiver alguma dúvida sobre como tratamos os seus dados, pode contactar-nos através do email <strong>{clinicInfo.email}</strong>.</p>

          <h2>6. Utilização de Cookies</h2>
          <p>O nosso website poderá utilizar cookies estritamente necessários para o seu funcionamento técnico, não recolhendo informação para fins de marketing sem o seu consentimento prévio.</p>
        </div>

      </div>
    </main>
  );
}
