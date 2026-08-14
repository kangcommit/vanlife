import { useCallback, useEffect, useState } from "react";
import { getVans } from "../services/vanService";
import type { Van } from "../types";

export function useVans(url: string) {
	const [vans, setVans] = useState<Van[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchVans = useCallback(async () => {
		setLoading(true);
		setError(false);

		try {
			const data = await getVans(url);

			setVans(data);
		} catch (_) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}, [url]);

	useEffect(() => {
		fetchVans();
	}, [fetchVans]);

	return { vans, loading, error, fetchVans };
}
