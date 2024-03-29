import ServiceCard from "../../component/ServiceCard/ServiceCard";
import manutencaoImg from "../../assets/images/manutencao.jpg";
import modernizacaoImg from "../../assets/images/modernizacao.jpg";
import atendimento24Img from "../../assets/images/atendimento-24.jpg";
import intercontinentalLogo from "../../assets/images/intercontinental-logo.png";
import widicareLogo from "../../assets/images/widicare-logo.png";
import segmedicLogo from "../../assets/images/segmedic-logo.png";
import video from "../../assets/images/elevador-video.mp4"
import presentation from "../../assets/presentation.mp4"
import logo from "../../assets/images/logo.png"

import { IoRocketSharp } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaUsers } from "react-icons/fa6";
import { Button } from "@mui/material";

import { animated, config, useSpring } from "@react-spring/web"
import { Link } from "react-router-dom";
import Footer from "../../component/Footer/Footer";

function Home() {
	const springs = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: config.molasses
	})

	return (
		<>
			<div className="hero pt-44 px-3.5 flex lg:pt-0 lg:px-44 lg:items-center">
				<section className="lg:w-3/4">
					<animated.h1 style={springs} className="text-4xl font-medium lg:text-7xl mb-2">Experiência, Segurança e Seriedade</animated.h1>
					<animated.p className="text-lg lg:text-3xl" style={springs}>Nossos técnicos são profissionais altamente qualificados que se dispõe para manter e reparar seu equipamento 24 horas por dia.</animated.p>
				</section>
			</div>
			<div className="mt-7 flex flex-col items-center gap-y-8 justify-center md:gap-x-4 lg:flex-row lg:items-start lg:gap-y-0 xl:gap-x-24">
				<ServiceCard 
					title="Manutenção preventiva e corretiva" 
					image={manutencaoImg}
					actionUrl="/todos-servicos" 
					body="A ATOS Elevadores oferece pacotes de manutenção preventiva abrangentes destinados a garantir a segurança e a confiabilidade dos equipamentos de elevação." 
				/>
				<ServiceCard 
					title="Modernização" 
					image={modernizacaoImg}
					actionUrl="/todos-servicos" 
					body="Atualize seus elevadores para os padrões mais recentes de segurança e eficiência. Desde elevadores residenciais a arranha-céus, a ATOS é especialista no fornecimento de pacotes personalizados de mondernização de elevadores." 
				/>
				<ServiceCard 
					title="Atendimento de chamados 24h" 
					image={atendimento24Img}
					actionUrl="/todos-servicos" 
					body="Nossa equipe altamente treinada está pronta para responder rapidamente a chamados, garantindo assistência imediata em situações críticas. " 
				/>
			</div>
			<section className="py-10 bg-orange mt-7 px-3.5 flex flex-col md:px-20 lg:py-16 lg:items-center lg:flex-row 2xl:px-72">
				<div className="lg:w-1/2">
					<div className="flex items-center gap-3">
						<h1 className="text-3xl font-bold mb-3.5">Missão</h1>
						<IoRocketSharp 	className="text-3xl relative bottom-1.5"/>
					</div>
					<p className="mb-5 text-lg lg:m-0">
						Nossa missão é atender com qualidade, sempre priorizando a segurança, tanto de nossos colaboradores quanto dos usuários dos elevadores, por nós mantidos.
						Por isso, a Atos Elevadores conta com uma equipe formada por profissionais altamente qualificados e experientes, que vão além dos padrões mais elevados
						de qualidade na manutenção de equipamentos de transporte vertical, cumprindo com todas as determinações exigidas pelo segmento e mantendo os elevadores
						dentro de sua originalidade.
					</p>
				</div>
				<div className="lg:pl-44">
					<video src={video} autoPlay muted loop className="h-96 w-96 object-cover mx-auto lg:m-0"></video>
				</div>
			</section>
			<section className="py-10 px-3.5 flex flex-col bg-white md:px-20 2xl:px-72 lg:py-16 lg:flex-row lg:items-center">
				<div className="mb-7 lg:m-0 lg:w-1/2">
					<img src={logo} alt="logo da empresa" className="w-64 block mx-auto md:w-80 xl:w-96 lg:m-0"/>
				</div>
				<div className="lg:w-1/2">
					<div className="flex items-center gap-3">
						<h1 className="text-3xl text-blue font-bold mb-3.5">Quem somos</h1>
						<FaUsers className="text-3xl text-blue relative bottom-1"/>
					</div>
					<p className="text-black text-lg">A Atos é uma empresa que atua na área de manutenção, modernização, consultoria e auditoria técnica em elevadores.
						Somos uma empresa independente e administrada com seriedade, o que garante nosso compromisso de qualidade e preço, fazendo com que as parcerias por nós mantida
						sejam longas e duradouras.
					</p>
				</div>
			</section>
			<section className="py-10 px-3.5 flex justify-center bg-white md:px-20 2xl:px-72 lg:py-16 lg:flex-row lg:items-center">
				<video src={presentation} controls className="w-full h-96 lg:h-auto lg:w-3/4 object-cover lg:m-0"></video>
			</section>
			<section className="py-10 px-3.5 bg-blue flex flex-col md:gap-x-20 xl:gap-x-60 md:px-20 lg:py-16 2xl:px-72 lg:flex-row">
				<div className="mb-8 lg:m-0">
					<h1 className="text-3xl font-bold mb-3.5">Solicite um orçamento</h1>
					<p className="text-lg">Solicite um orçamento entrando em contato com um dos nossos meios de comunicação:</p>
				</div>
				<div className="flex flex-col gap-y-4">
					<a href="https://wa.me/5521970084583" target="_blank" rel="noopener noreferrer">
						<Button variant="contained" color="success" size="large" startIcon={<FaWhatsapp />} className="w-full lg:w-96">Whatsapp</Button>
					</a>
					<Link to="/contato">
						<Button variant="outlined" color="secondary" size="large" startIcon={<FaEnvelope />} className="w-full lg:w-96">Outros meios</Button>
					</Link>
				</div>
			</section>
			<section className="py-10 px-3.5 md:px-20 lg:py-16 2xl:px-72">
				<div className="flex justify-center items-center gap-3">
					<h1 className="text-zinc-800 text-center font-bold text-3xl">Nossos parceiros</h1>
					<FaHandshake className="text-3xl text-zinc-800"/>
				</div>
				<p className="text-zinc-600 text-center text-lg">Parceiros que confiam no nosso trabalho.</p>
				<div className="bg-white flex flex-col items-center p-6 gap-y-5 shadow-md mt-9 shadow-black/25 rounded-2xl justify-between md:flex-row lg:p-10">
					<img src={intercontinentalLogo} alt="logo de uma empresa" className="w-36" />
					<img src={segmedicLogo} alt="logo de uma empresa" className="w-36" />
					<img src={widicareLogo} alt="logo de uma empresa" className="w-20" />
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Home;