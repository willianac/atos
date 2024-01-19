import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

function MainLayout() {
	return (
		<>
			<div className="min-h-full">
				<Navbar />
				<main>
					<Outlet />
				</main>
				<Footer />
			</div>
		</>
	)
}

export default MainLayout;