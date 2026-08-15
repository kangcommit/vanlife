import { useQuery } from "@tanstack/react-query";
import { apiPaths } from "@/shared/api/endpoints";
import { vanQueryKeys } from "../queryKeys";
import { getVans } from "../services/vanService";

interface UseVansOptions {
	isHost?: boolean;
}

export function useVans({ isHost = false }: UseVansOptions = {}) {
	const url = isHost ? apiPaths.host.vans.list : apiPaths.vans.list;
	const queryKey = isHost ? vanQueryKeys.hostList() : vanQueryKeys.list();

	const { isPending, error, data, refetch } = useQuery({
		queryKey,
		queryFn: () => getVans(url),
	});

	return { loading: isPending, error, vans: data ?? [], refetch };
}
