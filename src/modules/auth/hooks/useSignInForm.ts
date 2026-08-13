import { type ChangeEvent, type SubmitEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { paths } from "@/app/routes/paths";
import { signInUser } from "../services/signIn";
import { signIn } from "../utils/session";

export function useSignInForm() {
	const [signInFormData, setSignInFormData] = useState({
		email: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const location = useLocation();
	const navigate = useNavigate();

	const message = location.state?.message;
	const from = location.state?.from ?? paths.host;

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const { name, value } = e.target;
		setSignInFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
		e.preventDefault();

		setLoading(true);

		try {
			await signInUser(signInFormData);

			setError(null);
			signIn();
			navigate(from, { replace: true });
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong");
		} finally {
			setLoading(false);
		}
	}

	return {
		signInFormData,
		loading,
		error,
		message,
		handleChange,
		handleSubmit,
	};
}
