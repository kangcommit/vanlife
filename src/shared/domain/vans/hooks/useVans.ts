import { useQuery } from "@tanstack/react-query";
import { vanQueryKeys } from "../queryKeys";
import { getVans } from "../services/vanService";

interface UseVansOptions {
	isHost?: boolean;
}

export function useVans({ isHost = false }: UseVansOptions = {}) {
	const queryKey = isHost ? vanQueryKeys.hostList() : vanQueryKeys.list();

	const { isPending, error, data, refetch } = useQuery({
		queryKey,
		queryFn: () => getVans({ isHost }),
	});

	return { loading: isPending, error, vans: data ?? [], refetch };
}
