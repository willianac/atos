import { useState } from "react";
import logo from "../../assets/images/logo.png"
import { Link, NavLink } from "react-router-dom";
import { FaTools } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(true)

	const toggleMenu = () => {
		setIsMenuOpen(prevState => !prevState)
	}

	return (
		<header className="flex justify-between items-center px-8 h-16 bg-white overflow-hidden lg:h-24 md:px-60 xl:px-96 relative shadow-md shadow-black/15 z-10">
			<div>
				<Link to="/">
					<img src={logo} className="block max-w-28" alt="company logo" />
				</Link>
			</div>
			<nav className={`fixed right-0 top-0 bg-white w-full h-full transition md:static ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0`}>
				<img src={logo} className="block max-w-32 pl-5 pt-5 md:hidden" alt="company logo" />
				<i onClick={toggleMenu} className="absolute right-5 top-5 md:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></i>
				<ul className="text-blue flex flex-col px-5 pt-11 gap-y-2 text-xl font-medium md:p-0 md:flex-row md:h-full md:items-center md:justify-end md:gap-x-4">
					<li className="hover:text-orange transition duration-150 flex items-center gap-3">
						<FaPhone className="md:hidden"/>
						<NavLink 
							onClick={toggleMenu}
							to="/contato"
							className={({ isActive }) => [
								isActive ? "text-orange": ""
							].join(" ")
							}
							>Contato
						</NavLink>
					</li>
					<li className="hover:text-orange transition duration-150 flex items-center gap-3">
						<FaTools className="md:hidden"/>
						<NavLink 
							onClick={toggleMenu}
							to="/todos-servicos"
							className={({ isActive }) => [
								isActive ? "text-orange": ""
							].join(" ")
							}
							>Serviços
						</NavLink>
					</li>
				</ul>
			</nav>
			<i onClick={toggleMenu} className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></i>
		</header>
	)
}

export default Navbar;