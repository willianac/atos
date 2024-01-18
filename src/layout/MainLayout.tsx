import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

function MainLayout() {
	return (
		<>
			<div className="min-h-full">
				<Navbar />
				<main>
					<Outlet />
				</main>
				<footer>
					FOOTER HERE
				</footer>
			</div>
		</>
	)
}

export default MainLayout;