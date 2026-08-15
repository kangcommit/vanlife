import axios from "axios";
import { env } from "@/shared/config/env";

export const apiClient = axios.create({
	baseURL: env.apiBaseUrl,
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
	},
});

apiClient.interceptors.response.use(
	(response) => response,
	(error) => {
		if (axios.isAxiosError<{ message?: string }>(error)) {
			throw new Error(error.response?.data?.message ?? error.message);
		}

		throw error;
	},
);
