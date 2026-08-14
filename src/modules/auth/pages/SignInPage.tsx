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
		<section className="mx-auto flex max-w-7xl justify-center px-6 py-16 md:py-20">
			<div className="w-full max-w-md">
				<div className="mb-10">
					<p className="mb-4 font-semibold text-clay text-sm uppercase tracking-widest">
						Host access
					</p>
					<h1 className="text-balance font-black text-4xl text-ink leading-tight md:text-5xl">
						Sign in to your account.
					</h1>
				</div>

				{(message || error) && (
					<div className="mb-8">
						<Alert variant={error ? "error" : "info"}>{error ?? message}</Alert>
					</div>
				)}

				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
						required
					/>

					<button
						type="submit"
						disabled={loading}
						className="mt-4 rounded-lg bg-clay py-4 font-bold text-base text-surface transition-colors hover:bg-clay-dark active:scale-95 disabled:bg-soft disabled:text-panel"
					>
						{loading ? "Signing in..." : "Sign in"}
					</button>
				</form>
			</div>
		</section>
	);
}
