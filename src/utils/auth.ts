interface LoginCredentials {
	email: string;
	password: string;
}

export async function signIn({ email, password }: LoginCredentials) {
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
