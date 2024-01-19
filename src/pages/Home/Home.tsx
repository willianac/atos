import ServiceCard from "../../component/ServiceCard/ServiceCard";
import manutencaoImg from "../../assets/images/manutencao.jpg"
import modernizacaoImg from "../../assets/images/modernizacao.jpg"
import atendimento24Img from "../../assets/images/atendimento-24.jpg"
import video from "../../assets/images/elevador-video.mp4"
import { IoRocketSharp } from "react-icons/io5";

function Home() {
	return (
		<>
			<div className="hero pt-44 px-3.5 flex lg:pt-0 lg:px-44 lg:items-center">
				<section className="lg:w-3/4">
					<h1 className="text-4xl font-medium lg:text-7xl mb-2">Experiência, Segurança e Seriedade</h1>
					<p className="text-lg lg:text-3xl">Nossos técnicos são profissionais altamente qualificados que se dispõe para manter e reparar seu equipamento 24 horas por dia.</p>
				</section>
			</div>
			<div className="mt-7 flex flex-col items-center gap-y-8 justify-center lg:flex-row lg:items-start lg:gap-y-0 lg:gap-x-24">
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
			<section className="py-16 bg-orange mt-7 px-3.5 lg:px-44 flex items-center">
				<div className="w-1/2">
					<div className="flex items-center gap-3">
						<h1 className="text-3xl font-bold mb-3.5 lg:text-4xl">Missão</h1>
						<IoRocketSharp 	className="text-3xl relative bottom-1.5"/>
					</div>
					<p className="text-lg">
						Nossa missão é atender com qualidade, sempre priorizando a segurança, tanto de nossos colaboradores quanto dos usuários dos elevadores, por nós mantidos.
						Por isso, a Atos Elevadores conta com uma equipe formada por profissionais altamente qualificados e experientes, que vão além dos padrões mais elevados
						de qualidade na manutenção de equipamentos de transporte vertical, cumprindo com todas as determinações exigidas pelo segmento e mantendo os elevadores
						dentro de sua originalidade.
					</p>
				</div>
				<div className="pl-44">
					<video src={video} autoPlay muted loop className="h-96 w-96 object-cover"></video>
				</div>
			</section>
			<section className="mt-7 py-16 lg:px-44">
				<h1 className="text-3xl text-blue font-bold mb-3.5">Quem somos</h1>
				<p className="text-black text-lg">A Atos é uma empresa que atua na área de manutenção, modernização, consultoria e auditoria técnica em elevadores.
					Somos uma empresa independente e administrada com seriedade, o que garante nosso compromisso de qualidade e preço, fazendo com que as parcerias por nós mantida
					sejam longas e duradouras.
				</p>
			</section>
			<section className="mt-7 py-16 lg:px-44 bg-blue">
				<h1 className="text-3xl font-bold mb-3.5">Solicite um orçamento</h1>
			</section>
		</>
	)
}

export default Home;