import { apiClient } from "@/shared/api/apiClient";
import type { ApiErrorResponse } from "@/shared/api/types";
import type { VanDetail, VansResponse } from "@/shared/domain/vans/types";

export async function getVans(url: string) {
	const response = await apiClient(url);

	if (!response.ok) {
		const error: ApiErrorResponse = await response.json();

		throw new Error(error.message);
	}

	const data: VansResponse = await response.json();

	return data.data;
}

export async function getVan(url: string) {
	const response = await apiClient(url);

	if (!response.ok) {
		const error: ApiErrorResponse = await response.json();

		throw new Error(error.message);
	}

	const data: VanDetail = await response.json();

	return data;
}
