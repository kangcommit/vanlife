import { Route } from "react-router";
import HostLayout from "./components/HostLayout";
import DashboardPage from "./pages/DashboardPage";
import HostVanDetailPage from "./pages/HostVanDetailPage";
import HostVanInfoPage from "./pages/HostVanInfoPage";
import HostVanPhotosPage from "./pages/HostVanPhotosPage";
import HostVanPricingPage from "./pages/HostVanPricingPage";
import HostVansPage from "./pages/HostVansPage";
import IncomePage from "./pages/IncomePage";
import ReviewsPage from "./pages/ReviewsPage";
import { hostRoutePaths } from "./routePaths";

export const hostRoutes = (
	<Route path={hostRoutePaths.root} element={<HostLayout />}>
		<Route index element={<DashboardPage />} />
		<Route path={hostRoutePaths.income} element={<IncomePage />} />
		<Route path={hostRoutePaths.reviews} element={<ReviewsPage />} />
		<Route path={hostRoutePaths.vans} element={<HostVansPage />} />
		<Route path={hostRoutePaths.vansDetail} element={<HostVanDetailPage />}>
			<Route index element={<HostVanInfoPage />} />
			<Route
				path={hostRoutePaths.vanPricing}
				element={<HostVanPricingPage />}
			/>
			<Route path={hostRoutePaths.vanPhotos} element={<HostVanPhotosPage />} />
		</Route>
	</Route>
);
