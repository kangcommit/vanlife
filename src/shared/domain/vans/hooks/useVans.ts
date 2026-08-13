import { useCallback, useEffect, useState } from "react";
import type { Van, VansResponse } from "../types";

export function useVans(url: string) {
	const [vans, setVans] = useState<Van[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchVans = useCallback(async () => {
		setLoading(true);
		setError(false);

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const data: VansResponse = await response.json();
			setVans(data.vans);
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
