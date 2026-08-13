import { Alert } from "@/shared/components/Alert";
import { Input } from "@/shared/components/Input";
import { useSignInForm } from "../hooks/useSignInForm";

export default function SignInPage() {
	const {
		signInFormData,
		loading,
		error,
		message,
		handleChange,
		handleSubmit,
	} = useSignInForm();

	return (
		<div className="mx-6.5 flex flex-col items-center gap-12">
			<h1 className="font-bold text-3xl text-coal">Sign in to your account</h1>

			{(message || error) && (
				<Alert variant={error ? "error" : "info"}>{error ?? message}</Alert>
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
					value={signInFormData.email}
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
					value={signInFormData.password}
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
