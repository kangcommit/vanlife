import React from "react";
import { FaCircleInfo, FaTriangleExclamation } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router";
import { Input } from "../components/Input";

export default function Login() {
	const [loginFormData, setLoginFormData] = React.useState({
		email: "",
		password: "",
	});
	const [loading, setLoading] = React.useState(false);
	const [error, setError] = React.useState<string | null>(null);

	const location = useLocation();
	const navigate = useNavigate();

	const message = location.state?.message;
	const from = location.state?.from ?? "/host";

	async function signInUser({
		email,
		password,
	}: {
		email: string;
		password: string;
	}) {
		const res = await fetch("/api/login", {
			method: "post",
			body: JSON.stringify({ email, password }),
		});
		const data = await res.json();

		if (!res.ok) {
			throw {
				message: data.message,
				statusText: res.statusText,
				status: res.status,
			};
		}

		return data;
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setLoginFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		setLoading(true);
		signInUser(loginFormData)
			.then(() => {
				setError(null);
				localStorage.setItem("isSignedIn", "true");
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
				setError(err.message);
			})
			.finally(() => setLoading(false));
	}

	return (
		<div className="mx-6.5 flex flex-col items-center gap-12">
			<h1 className="font-bold text-3xl text-coal">Sign in to your account</h1>

			{!error && message && (
				<div
					role="status"
					aria-live="polite"
					className="flex w-full max-w-md items-start gap-3 rounded-md border border-amber-200 bg-amber-50 px-4 py-3"
				>
					<FaCircleInfo
						aria-hidden="true"
						className="mt-0.5 shrink-0 text-amber-600 text-base"
					/>

					<p className="font-medium text-amber-900 text-sm leading-6">
						{message}
					</p>
				</div>
			)}
			{error && (
				<div
					role="alert"
					aria-live="assertive"
					className="flex w-full max-w-md items-start gap-3 rounded-md border border-red-200 bg-red-50 px-4 py-3"
				>
					<FaTriangleExclamation
						aria-hidden="true"
						className="mt-0.5 shrink-0 text-base text-red-600"
					/>

					<p className="font-medium text-red-900 text-sm leading-6">{error}</p>
				</div>
			)}
			<form onSubmit={handleSubmit} className="flex w-full max-w-md flex-col">
				<label htmlFor="email" className="sr-only">
					Email address
				</label>
				<Input
					id="email"
					name="email"
					type="email"
					onChange={handleChange}
					autoComplete="email"
					placeholder="Email address"
					value={loginFormData.email}
					className="rounded-t-md"
					required
				/>

				<label htmlFor="password" className="sr-only">
					Password
				</label>
				<Input
					id="password"
					name="password"
					type="password"
					onChange={handleChange}
					placeholder="Password"
					value={loginFormData.password}
					className="rounded-b-md"
					required
				/>

				<button
					type="submit"
					disabled={loading}
					className="mt-5.5 cursor-pointer rounded-md bg-orange py-4 font-bold text-base text-white shadow-sm"
				>
					Sign In
				</button>
			</form>
		</div>
	);
}
