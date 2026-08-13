import { Link } from "react-router";
import { paths } from "../routes/paths";

export default function NotFoundPage() {
	return (
		<section className="flex min-h-[calc(100vh-172px)] flex-col items-center justify-center gap-7.5 px-6.5 text-center">
			<h1 className="font-bold text-3xl text-coal">
				Sorry, the page you were looking for was not found.
			</h1>

			<Link
				to={paths.home}
				className="w-full max-w-xs rounded-md bg-coal py-3.5 font-bold text-lg text-white"
			>
				Return to home
			</Link>
		</section>
	);
}
