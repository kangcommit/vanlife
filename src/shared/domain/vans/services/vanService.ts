import { apiClient } from "@/shared/api/apiClient";
import { apiPaths } from "@/shared/api/endpoints";
import type { VanDetail, VansResponse } from "@/shared/domain/vans/types";

export async function getVans({ isHost = false } = {}) {
	const url = isHost ? apiPaths.host.vans.list : apiPaths.vans.list;
	const response = await apiClient.get<VansResponse>(url);

	return response.data.data;
}

export async function getVan(id: string, { isHost = false } = {}) {
	const url = isHost ? apiPaths.host.vans.detail(id) : apiPaths.vans.detail(id);
	const response = await apiClient.get<VanDetail>(url);

	return response.data;
}
