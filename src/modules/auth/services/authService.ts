import { apiClient } from "@/shared/api/apiClient";
import { apiPaths } from "@/shared/api/endpoints";

interface SignInCredentials {
	email: string;
	password: string;
}

export async function signInUser({ email, password }: SignInCredentials) {
	const response = await apiClient(apiPaths.auth.signInEmail, {
		method: "POST",
		body: JSON.stringify({ email, password }),
	});

	const data = await response.json();

	if (!response.ok) {
		throw new Error(data.message);
	}

	return data;
}

export async function signOutUser() {
	await apiClient(apiPaths.auth.signOut, {
		method: "POST",
		body: JSON.stringify({}),
	});
}
