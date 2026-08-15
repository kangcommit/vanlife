import { apiClient } from "@/shared/api/apiClient";
import type { VanDetail, VansResponse } from "@/shared/domain/vans/types";

export async function getVans(url: string) {
	const response = await apiClient.get<VansResponse>(url);

	return response.data.data;
}

export async function getVan(url: string) {
	const response = await apiClient.get<VanDetail>(url);

	return response.data;
}
