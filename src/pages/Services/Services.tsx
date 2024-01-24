import manutencaoImg from "../../assets/images/manutencao.jpg"
import modernizacaoImg from "../../assets/images/modernizacao.jpg"
import atendimento24Img from "../../assets/images/atendimento-24.jpg"
import { useTrail, animated, config } from "@react-spring/web"

const blocks = [
	{
		title: "Modernização",
		body: `Atualize seus elevadores para os padrões mais recentes de segurança, eficiência e tecnologia. 
					Nossa modernização de elevadores inclui a instalação de sistemas avançados de controle, 
					componentes mais eficientes e aprimoramentos estéticos, proporcionando uma experiência de 
					transporte vertical mais segura e confortável.`,
		background: "bg-zinc-100",
		image: modernizacaoImg,
		reverseRow: false
	},
	{
		title: "Manutenção preventiva",
		body: `Garanta o desempenho contínuo de seus equipamentos e sistemas com nossa manutenção preventiva. 
					Realizamos inspeções regulares e ajustes para evitar falhas, prolongando a vida útil e minimizando paradas não planejadas.`,
		background: "bg-zinc-300",
		image: manutencaoImg,
		reverseRow: true
	},
	{
		title: "Modernização",
		body: `Atualize seus elevadores para os padrões mais recentes de segurança, eficiência e tecnologia. 
					Nossa modernização de elevadores inclui a instalação de sistemas avançados de controle, 
					componentes mais eficientes e aprimoramentos estéticos, proporcionando uma experiência de 
					transporte vertical mais segura e confortável.`,
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
  <section className={`px-3.5 py-8 bg-zinc-100 lg:px-72 ${background}`}>
    <h1 className="text-4xl text-zinc-800 font-bold mb-2.5 text-center">{title}</h1>
    <div className={`flex items-center flex-col justify-center ${reverseRow ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <div className="">
        <img src={image} alt="manutencao em um elevador" className="w-[300px] max-w-none"/>
      </div> 
      <div className="px-10">
        <p className="text-xl text-zinc-800">
          {body}
        </p>
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
		</>
	)
}

export default Services;