import { Route } from "react-router";
import AuthRequired from "@/app/AuthRequired";
import { paths } from "@/app/routes/paths";
import HostLayout from "./components/HostLayout";
import DashboardPage from "./pages/DashboardPage";
import HostVanDetailPage from "./pages/HostVanDetailPage";
import HostVanInfoPage from "./pages/HostVanInfoPage";
import HostVanPhotosPage from "./pages/HostVanPhotosPage";
import HostVanPricingPage from "./pages/HostVanPricingPage";
import HostVansPage from "./pages/HostVansPage";
import IncomePage from "./pages/IncomePage";
import ReviewsPage from "./pages/ReviewsPage";

export const hostRoutes = (
	<Route element={<AuthRequired />}>
		<Route path={paths.host} element={<HostLayout />}>
			<Route index element={<DashboardPage />} />
			<Route path={paths.hostIncome} element={<IncomePage />} />
			<Route path={paths.hostReviews} element={<ReviewsPage />} />
			<Route path={paths.hostVans} element={<HostVansPage />} />
			<Route path={paths.hostVansDetail} element={<HostVanDetailPage />}>
				<Route index element={<HostVanInfoPage />} />
				<Route path={paths.hostVanPricing} element={<HostVanPricingPage />} />
				<Route path={paths.hostVanPhotos} element={<HostVanPhotosPage />} />
			</Route>
		</Route>
	</Route>
);
