import { useCallback, useEffect, useState } from "react";
import { getVan } from "../services/vanService";
import type { VanDetail } from "../types";

export function useVan(url: string | null) {
	const [van, setVan] = useState<VanDetail | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const fetchVan = useCallback(async () => {
		if (!url) {
			setVan(null);
			setLoading(false);
			setError(false);
			return;
		}

		setLoading(true);
		setError(false);

		try {
			const data = await getVan(url);

			setVan(data);
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
