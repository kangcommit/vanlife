import { env } from "@/shared/config/env";

export const apiClient = async (path: string, options: RequestInit = {}) => {
	const headers = new Headers(options.headers);

	if (options.body && !headers.has("Content-Type")) {
		headers.set("Content-Type", "application/json");
	}

	return fetch(`${env.apiBaseUrl}${path}`, {
		...options,
		credentials: "include",
		headers,
	});
};
