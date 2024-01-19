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
			<section className="py-16 bg-zinc-200 lg:px-64 flex justify-between items-center">
				<div>
					<h1 className="text-zinc-700 text-5xl font-bold">Entre em contato conosco</h1>
					<span className="text-xl text-zinc-700">Ou nos mande um email em um de nossos endereços:</span>
				</div>
				<div className="flex flex-col">
					<Button variant="contained" color="success" size="large" startIcon={<FaWhatsapp />}>Whatsapp</Button>
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