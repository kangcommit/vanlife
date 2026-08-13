import { BrowserRouter, Route, Routes } from "react-router";
import AuthRequired from "./app/AuthRequired";
import RootLayout from "./app/components/RootLayout";
import GuestOnly from "./app/GuestOnly";
import AboutPage from "./app/pages/AboutPage";
import HomePage from "./app/pages/HomePage";
import NotFoundPage from "./app/pages/NotFoundPage";
import { paths } from "./app/routes/paths";
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
				<Route path={paths.home} element={<RootLayout />}>
					<Route index element={<HomePage />} />

					<Route path={paths.about} element={<AboutPage />} />
					<Route path={paths.vans} element={<Vans />} />
					<Route path={paths.vanDetail} element={<VanDetail />} />

					<Route path={paths.signIn} element={<SignInPage />} />

					<Route element={<AuthRequired />}>
						<Route path={paths.host} element={<HostLayout />}>
							<Route index element={<DashboardPage />} />
							<Route path={paths.hostIncome} element={<IncomePage />} />
							<Route path={paths.hostReviews} element={<ReviewsPage />} />
							<Route path={paths.vans} element={<HostVansPage />} />
							<Route path={paths.vanDetail} element={<HostVanDetailPage />}>
								<Route index element={<HostVanInfoPage />} />
								<Route
									path={paths.hostVanPricing}
									element={<HostVanPricingPage />}
								/>
								<Route
									path={paths.hostVanPhotos}
									element={<HostVanPhotosPage />}
								/>
							</Route>
						</Route>
					</Route>

					<Route path={paths.notFound} element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
