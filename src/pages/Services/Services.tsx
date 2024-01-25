import manutencaoImg from "../../assets/images/manutencao.jpg"
import modernizacaoImg from "../../assets/images/modernizacao.jpg"
import atendimento24Img from "../../assets/images/atendimento-24.jpg"
import { useTrail, animated, config } from "@react-spring/web"
import { Button } from "@mui/material"
import { LuArrowRight } from "react-icons/lu";
import { Link } from "react-router-dom"
import Footer from "../../component/Footer/Footer"

const blocks = [
	{
		title: "Modernização",
		body: `Seja a modernização parcial, em fases ou completa com substituição do sistema atual, nós trabalharemos
					junto com você para planejar seus upgrades para atender aos requisitos de construção e orçamentais.
					Todos os equipamentos instalados pela Atos não são de nossa propriedade, o que significa que podem ser mantidos
					por qualquer provedor de manutenção qualificado, agora ou no futuro.`,
		background: "bg-zinc-100",
		image: modernizacaoImg,
		reverseRow: false
	},
	{
		title: "Manutenção preventiva",
		body: `Garanta o desempenho contínuo de seus equipamentos e sistemas com nossa manutenção preventiva. 
					Oferecemos serviços de manutenção personalizados sob medida para atender as necessidades
					específicas tanto do seu prédio, estabelecimento comercial, escritório ou residência.`,
		background: "bg-zinc-300",
		image: manutencaoImg,
		reverseRow: true
	},
	{
		title: "Atendimento 24h",
		body: `Estamos disponíveis 24 horas por dia para atender suas emergências. Nossa equipe altamente treinada está pronta para 
					responder rapidamente a chamados, garantindo assistência imediata em situações críticas. Conte conosco para suporte contínuo, 
					garantindo a tranquilidade e a continuidade de suas operações a qualquer momento.`,
		background: "bg-zinc-100",
		image: atendimento24Img,
		reverseRow: false
	},
]

type SectionBlockProps = {
	title: string
	body: string
	background: string
	image: string
	reverseRow: boolean
}

const Section = ({ title, body, background, image, reverseRow }: SectionBlockProps) => (
  <section className={`px-3.5 py-8 bg-zinc-100 md:px-32 xl:px-72 ${background}`}>
    <h1 className="text-3xl text-zinc-800 font-bold mb-2.5 text-center lg:text-4xl">{title}</h1>
    <div className={`flex items-center flex-col justify-center ${reverseRow ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <div className="mb-5">
        <img src={image} alt="manutencao em um elevador" className="h-96 w-96 object-cover  lg:w-[300px] lg:h-[300px] lg:max-w-none"/>
      </div> 
      <div className="lg:px-10">
        <p className="text-xl text-zinc-800 mb-4">
          {body}
        </p>
				<Link to="/contato">
					<Button variant="contained" endIcon={<LuArrowRight className="animate-pulse"/>}>Entre em contato</Button>
				</Link>
      </div>
    </div>
  </section>
);


function Services() {
	const trails = useTrail(blocks.length, {
		from: {y: 200},
		to: {y: 0},
		config: config.slow
	})

	return (
		<>
			{trails.map((props, index) => (
				<animated.section style={props}>
					<Section {...blocks[index]}/>
				</animated.section>
			))}
			<Footer />
		</>
	)
}

export default Services;