import { Route } from "react-router";
import { paths } from "@/app/routes/paths";
import VanDetail from "./pages/VanDetailPage";
import Vans from "./pages/VansPage";

export const vansRoutes = (
	<>
		<Route path={paths.vans} element={<Vans />} />
		<Route path={paths.vansDetail} element={<VanDetail />} />
	</>
);
