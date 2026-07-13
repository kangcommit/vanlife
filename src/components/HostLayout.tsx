import { Link, Outlet } from "react-router";

export default function HostLayout() {
	return (
		<>
			<nav>
				<Link to=".">Dashbord</Link>
				<Link to="income">Income</Link>
				<Link to="reviews">Reviews</Link>
			</nav>
			<Outlet />
		</>
	);
}
