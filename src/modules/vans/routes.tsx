import { Route } from "react-router";
import VanDetail from "./pages/VanDetailPage";
import Vans from "./pages/VansPage";
import { vansRoutePaths } from "./routePaths";

export const vansRoutes = (
	<>
		<Route path={vansRoutePaths.root} element={<Vans />} />
		<Route path={vansRoutePaths.detail} element={<VanDetail />} />
	</>
);
