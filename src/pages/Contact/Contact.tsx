import { Button } from "@mui/material";
import { useRef, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert"

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

	return (
		<>
			<section className="py-8 px-3.5 bg-zinc-200 flex flex-col justify-between items-center lg:py-16 lg:flex-row lg:px-64">
				<div>
					<h1 className="text-zinc-700 text-3xl font-bold lg:text-4xl">Entre em contato conosco</h1>
					<span className="text-lg text-zinc-700">Ou nos mande um email em um de nossos endereços:</span>
				</div>
				<div className="flex flex-col items-center w-full lg:w-auto mt-5">
					<a href="https://wa.me/5521964407377" target="_blank" rel="noopener noreferrer" className="w-full">
						<Button variant="contained" color="success" size="large" className="w-full" startIcon={<FaWhatsapp />}>Whatsapp</Button>
					</a>
					<span className="text-indigo-600 text-lg hover:underline cursor-pointer mt-4" ref={email1Ref} onClick={() => copyEmail(email1Ref)}>atoselevadores@hotmail.com</span>
					<span className="text-indigo-600 text-lg hover:underline cursor-pointer" ref={email2Ref} onClick={() => copyEmail(email2Ref)}>comercial.ats@gmail.com.br</span>
				</div>
			</section>
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