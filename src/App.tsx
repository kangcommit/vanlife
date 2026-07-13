import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import VanDetail from "./pages/Vans/VanDetail";
import Vans from "./pages/Vans/Vans";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="vans" element={<Vans />} />
					<Route path="vans/:id" element={<VanDetail />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
