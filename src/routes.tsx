import { createBrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";

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
				path: "/contato",
				element: <Contact />
			},
			{
				path: "/servicos",
				element: <Services />,
				// children: [
				// 	{
				// 		path: "/manutencao"
				// 	},
				// 	{
				// 		path: "/modernizacao"
				// 	},
				// 	{
				// 		path: "/atendimento-chamados"
				// 	}
				// ]
			}
		]
	},
])