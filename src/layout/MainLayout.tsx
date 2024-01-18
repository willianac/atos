import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

function MainLayout() {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
			<footer>
				FOOTER HERE
			</footer>
		</>
	)
}

export default MainLayout;