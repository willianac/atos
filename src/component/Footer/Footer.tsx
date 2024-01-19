import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
	return (
		<footer className="bg-zinc-800 py-10 lg:px-64">
			<div className="flex gap-96">
				<div className="flex flex-col">
					<span className="font-bold text-lg">Contatos</span>
					<span>(21) 4119-7888</span>
					<span>atoselevadores@hotmail.com</span>
					<span>comercial.ats@gmail.com.br</span>
				</div>
				<div className="flex gap-4">
					<a href="https://www.facebook.com/everaldo.lourenco.524?mibextid=ZbWKwL" target="_blank" rel="noreferrer">
						<FaFacebook className="text-2xl hover:text-orange"/>
					</a>
					<a href="https://www.instagram.com/atoselevadores?igsh=MTFuMzBobXlreW1xZw==" target="_blank" rel="noreferrer">
						<FaInstagram className="text-2xl hover:text-orange"/>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer;