import { useCallback, useEffect, useState } from "react";
import type { Van } from "@/shared/utils/types";

interface VanResponse {
	vans: Van;
}

export function useVan(url: string) {
	const [van, setVan] = useState<Van | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchVan = useCallback(async () => {
		setLoading(true);
		setError(false);

		try {
			const response = await fetch(url);

			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`);
			}

			const data: VanResponse = await response.json();
			setVan(data.vans);
		} catch (_) {
			setError(true);
		} finally {
			setLoading(false);
		}
	}, [url]);

	useEffect(() => {
		fetchVan();
	}, [fetchVan]);

	return { van, loading, error, fetchVan };
}
