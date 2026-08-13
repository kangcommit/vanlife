export function isSignedIn() {
	return localStorage.getItem("isSignedIn") === "true";
}

export function signIn() {
	localStorage.setItem("isSignedIn", "true");
}

export function signOut() {
	localStorage.removeItem("isSignedIn");
}
