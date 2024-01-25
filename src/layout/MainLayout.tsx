import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";

function MainLayout() {
	return (
		<>
			<div className="min-h-full">
				<Navbar />
				<main className="pt-16 lg:pt-24">
					<Outlet />
				</main>
			</div>
		</>
	)
}

export default MainLayout;