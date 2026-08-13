import { BrowserRouter, Route, Routes } from "react-router";
import AuthRequired from "./app/AuthRequired";
import RootLayout from "./app/components/RootLayout";
import AboutPage from "./app/pages/AboutPage";
import HomePage from "./app/pages/HomePage";
import NotFoundPage from "./app/pages/NotFoundPage";
import SignInPage from "./modules/auth/pages/SignInPage";
import HostLayout from "./modules/host/components/HostLayout";
import DashboardPage from "./modules/host/pages/DashboardPage";
import HostVanDetailPage from "./modules/host/pages/HostVanDetailPage";
import HostVanInfoPage from "./modules/host/pages/HostVanInfoPage";
import HostVanPhotosPage from "./modules/host/pages/HostVanPhotosPage";
import HostVanPricingPage from "./modules/host/pages/HostVanPricingPage";
import HostVansPage from "./modules/host/pages/HostVansPage";
import IncomePage from "./modules/host/pages/IncomePage";
import ReviewsPage from "./modules/host/pages/ReviewsPage";
import VanDetail from "./modules/vans/pages/VanDetailPage";
import Vans from "./modules/vans/pages/VansPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<RootLayout />}>
					<Route index element={<HomePage />} />

					<Route path="about" element={<AboutPage />} />
					<Route path="vans" element={<Vans />} />
					<Route path="vans/:id" element={<VanDetail />} />
					<Route path="sign-in" element={<SignInPage />} />

					<Route element={<AuthRequired />}>
						<Route path="host" element={<HostLayout />}>
							<Route index element={<DashboardPage />} />
							<Route path="income" element={<IncomePage />} />
							<Route path="reviews" element={<ReviewsPage />} />
							<Route path="vans" element={<HostVansPage />} />
							<Route path="vans/:id" element={<HostVanDetailPage />}>
								<Route index element={<HostVanInfoPage />} />
								<Route path="pricing" element={<HostVanPricingPage />} />
								<Route path="photos" element={<HostVanPhotosPage />} />
							</Route>
						</Route>
					</Route>

					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
