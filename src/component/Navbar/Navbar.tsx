import { useState } from "react";
import logo from "../../assets/images/logo.png"

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(true)

	const toggleMenu = () => {
		setIsMenuOpen(prevState => !prevState)
	}

	return (
		<header className="flex justify-between items-center px-6 h-16 bg-white overflow-hidden">
			<div>
				<img src={logo} className="block max-w-24" alt="company logo" />
			</div>
			<nav className={`fixed right-0 top-0 bg-white w-full h-full transition ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
				<img src={logo} className="block max-w-32 pl-5 pt-5" alt="company logo" />
				<i onClick={toggleMenu} className="absolute right-5 top-5"><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></i>
				<ul className="text-blue flex flex-col px-5 pt-11 gap-y-2 text-xl font-medium">
					<li>
						Serviços
					</li>
					<li>
						Contato
					</li>
				</ul>
			</nav>
			<i onClick={toggleMenu}><svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 -960 960 960" width="28"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></i>
		</header>
	)
}

export default Navbar;