import { useQuery } from "@tanstack/react-query";
import { apiPaths } from "@/shared/api/endpoints";
import { vanQueryKeys } from "../queryKeys";
import { getVan } from "../services/vanService";

interface UseVanOptions {
	isHost?: boolean;
}

export function useVan(
	id: string | undefined,
	{ isHost = false }: UseVanOptions = {},
) {
	const url = id
		? isHost
			? apiPaths.host.vans.detail(id)
			: apiPaths.vans.detail(id)
		: null;
	const queryKey = isHost
		? vanQueryKeys.hostDetail(id ?? "")
		: vanQueryKeys.detail(id ?? "");

	const { isPending, error, data, refetch } = useQuery({
		queryKey,
		queryFn: () => {
			if (!url) {
				throw new Error("Van URL is required");
			}

			return getVan(url);
		},
		enabled: Boolean(url),
	});

	return { loading: isPending, error, van: data ?? null, refetch };
}
