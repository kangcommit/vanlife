interface SignInCredentials {
	email: string;
	password: string;
}

export async function signInUser({ email, password }: SignInCredentials) {
	const res = await fetch("/api/sign-in", {
		method: "post",
		body: JSON.stringify({ email, password }),
	});
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	return data;
}
