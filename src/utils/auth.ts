interface LoginCredentials {
	email: string;
	password: string;
}

export async function signInUser({ email, password }: LoginCredentials) {
	const res = await fetch("/api/login", {
		method: "post",
		body: JSON.stringify({ email, password }),
	});
	const data = await res.json();

	if (!res.ok) {
		throw new Error(data.message);
	}

	return data;
}

export function isSignedIn() {
	return localStorage.getItem("isSignedIn") === "true";
}

export function signIn() {
	localStorage.setItem("isSignedIn", "true");
}

export function signOut() {
	localStorage.removeItem("isSignedIn");
}
