import { createBrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Maintence from "./pages/Services/Maintenance/Maintenance";
import Modernization from "./pages/Services/Modernization/Modernization";
import CallHandling from "./pages/Services/CallHandling/CallHandling";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "contato",
				element: <Contact />
			},
			{
				path: "todos-servicos",
				element: <Services />,
			},
			{
				path: "services/manutencao",
				element: <Maintence />
			},
			{
				path: "services/modernizacao",
				element: <Modernization />
			},
			{
				path: "services/atendimento-chamados",
				element: <CallHandling />
			}
		]
	},
])