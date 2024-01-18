import ServiceCard from "../../component/ServiceCard/ServiceCard";
import manutencaoImg from "../../assets/images/manutencao.jpg"
import modernizacaoImg from "../../assets/images/modernizacao.jpg"
import atendimento24Img from "../../assets/images/atendimento-24.jpg"

function Home() {
	return (
		<>
			<div className="hero pt-44 px-3.5 flex lg:pt-0 lg:px-44 lg:items-center">
				<section className="lg:w-3/4">
					<h1 className="text-4xl font-medium lg:text-7xl mb-2">Experiência, Segurança e Seriedade</h1>
					<p className="text-lg lg:text-3xl">Nossos técnicos são profissionais altamente qualificados que se dispõe para manter e reparar seu equipamento 24 horas por dia.</p>
				</section>
			</div>
			<div className="mt-7 grid grid-cols-1 justify-items-center gap-y-8 lg:grid-cols-3">
				<ServiceCard 
					title="Manutenção preventiva e corretiva" 
					image={manutencaoImg}
					actionUrl="/contato" 
					body="A ATOS Elevadores oferece pacotes de manutenção preventiva abrangentes destinados a garantir a segurança e a confiabilidade dos equipamentos de elevação." 
				/>
				<ServiceCard 
					title="Modernização" 
					image={modernizacaoImg}
					actionUrl="/contato" 
					body="Atualize seus elevadores para os padrões mais recentes de segurança e eficiência. Desde elevadores residenciais a arranha-céus, a ATOS é especialista no fornecimento de pacotes personalizados de mondernização de elevadores." 
				/>
				<ServiceCard 
					title="Atendimento de chamados 24h" 
					image={atendimento24Img}
					actionUrl="/contato" 
					body="Nossa equipe altamente treinada está pronta para responder rapidamente a chamados, garantindo assistência imediata em situações críticas. " 
				/>
			</div>
		</>
	)
}

export default Home;