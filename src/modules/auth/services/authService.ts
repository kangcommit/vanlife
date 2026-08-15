import { apiClient } from "@/shared/api/apiClient";
import { apiPaths } from "@/shared/api/endpoints";

interface SignInCredentials {
	email: string;
	password: string;
}

export async function signInUser({ email, password }: SignInCredentials) {
	const response = await apiClient.post(apiPaths.auth.signInEmail, {
		email,
		password,
	});

	return response.data;
}

export async function signOutUser() {
	await apiClient.post(apiPaths.auth.signOut, {});
}
