import { BrowserRouter, Route, Routes } from "react-router";
import AuthRequired from "./components/AuthRequired";
import GuestOnly from "./components/GuestOnly";
import Layout from "./components/Layout";
import HostLayout from "./modules/host/components/HostLayout";
import Dashboard from "./modules/host/pages/Dashboard";
import HostVanDetail from "./modules/host/pages/HostVanDetail";
import HostVanInfo from "./modules/host/pages/HostVanInfo";
import HostVanPhotos from "./modules/host/pages/HostVanPhotos";
import HostVanPricing from "./modules/host/pages/HostVanPricing";
import HostVans from "./modules/host/pages/HostVans";
import Income from "./modules/host/pages/Income";
import Reviews from "./modules/host/pages/Reviews";
import VanDetail from "./modules/vans/pages/VanDetail";
import Vans from "./modules/vans/pages/Vans";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />

					<Route element={<GuestOnly />}>
						<Route path="login" element={<Login />} />
					</Route>

					<Route path="about" element={<About />} />
					<Route path="vans" element={<Vans />} />
					<Route path="vans/:id" element={<VanDetail />} />

					<Route element={<AuthRequired />}>
						<Route path="host" element={<HostLayout />}>
							<Route index element={<Dashboard />} />
							<Route path="income" element={<Income />} />
							<Route path="vans" element={<HostVans />} />
							<Route path="vans/:id" element={<HostVanDetail />}>
								<Route index element={<HostVanInfo />} />
								<Route path="pricing" element={<HostVanPricing />} />
								<Route path="photos" element={<HostVanPhotos />} />
							</Route>
							<Route path="reviews" element={<Reviews />} />
						</Route>
					</Route>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
