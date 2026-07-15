import { Link } from "react-router";

export default function NotFound() {
	return (
		<div className="flex min-h-[calc(100vh-172px)] flex-col items-center justify-center gap-7.5 px-6.5 text-center">
			<h1 className="font-bold text-[#161616] text-[32px]">
				Sorry, the page you were looking for was not found.
			</h1>

			<Link
				to="/"
				className="w-full max-w-xs rounded-md bg-[#161616] py-3.5 font-bold text-lg text-white"
			>
				Return to home
			</Link>
		</div>
	);
}
