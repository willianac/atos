import { Button } from "@mui/material";
import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert"
import { useSpring, animated, config } from "@react-spring/web";
import Footer from "../../component/Footer/Footer";

function Contact() {
	const [open, setOpen] = useState(false)
	const email1Ref = useRef<HTMLSpanElement>(null)
	const email2Ref = useRef<HTMLSpanElement>(null)

	function copyEmail (ref: React.RefObject<HTMLSpanElement>) {
		if(ref.current) {
			navigator.clipboard.writeText(ref.current.innerHTML)
			setOpen(true)
		}
	}

	function handleClose() {
		setOpen(false)
	}

	const leftSlideAnimation = useSpring({
		from: {x: -400},
		to: {x: 0},
		config: config.slow
	})
	const rightSlideAnimation = useSpring({
		from: {x: 400},
		to: {x: 0},
		config: config.slow
	})

	return (
		<>
			<section className="py-8 px-3.5 bg-zinc-200 flex flex-col justify-between items-center md:px-32 lg:py-16 lg:flex-row xl:px-64">
				<div>
					<h1 className="text-zinc-700 text-3xl font-bold lg:text-4xl">Entre em contato conosco</h1>
					<span className="text-lg text-zinc-700">Ou nos mande um email em um de nossos endereços:</span>
				</div>
				<div className="flex justify-center w-full mt-4 lg:w-auto lg:m-0">
					<a href="https://wa.me/5521964407377" target="_blank" rel="noopener noreferrer" className="w-full md:w-96">
						<Button variant="contained" color="success" size="large" className="w-full" startIcon={<FaWhatsapp />}>Whatsapp</Button>
					</a>
				</div>
			</section>
			<section className="flex flex-col justify-between md:px-32 gap-y-4 lg:flex-row xl:px-64 my-4">	
				<animated.div style={leftSlideAnimation} className="bg-white rounded-xl w-full p-10 shadow-md shadow-black/10 lg:w-96">
					<h1 className="text-2xl font-bold text-zinc-800 text-center">Outros telefones</h1>
					<div className="flex flex-col items-center text-lg text-zinc-800 mt-4">
						<span>(21) 4119-7888</span>
						<span>(21) 97008-4583</span>
					</div>
				</animated.div>	
				<animated.div style={rightSlideAnimation} className="bg-white rounded-xl w-full p-10 shadow-md shadow-black/10 lg:w-96">
					<h1 className="text-2xl font-bold text-zinc-800 text-center">Envie-nos um email</h1>
					<div className="flex flex-col items-center">
						<span className="text-indigo-600 text-lg hover:underline cursor-pointer mt-4" ref={email1Ref} onClick={() => copyEmail(email1Ref)}>atoselevadores@hotmail.com</span>
						<span className="text-indigo-600 text-lg hover:underline cursor-pointer" ref={email2Ref} onClick={() => copyEmail(email2Ref)}>comercial.ats@gmail.com.br</span>
					</div>
				</animated.div>	
			</section>
			<div className="lg:fixed lg:bottom-0 lg:w-full">
				<Footer />
			</div>
			<Snackbar 
				open={open}
				autoHideDuration={3000}
				onClose={handleClose}
				anchorOrigin={{vertical: "top", horizontal: "center"}}
			>
				<Alert
					onClose={handleClose}
					severity="success"
					variant="filled"
					sx={{ width: "100%" }}
				>
					Endereço de email copiado!
				</Alert>
			</Snackbar>
		</>
	)
}

export default Contact;