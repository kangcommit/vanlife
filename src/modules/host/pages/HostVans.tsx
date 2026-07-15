import React from "react";
import ErrorMessage from "../../../components/ErrorMessage";
import LoadingSpinner from "../../../components/LoadingSpinner";
import type { Van, VansResponse } from "../../../utils/types";
import HostVanCard from "../components/HostVanCard";

export default function HostVans() {
	const [vans, setVans] = React.useState<Van[]>([]);
	const [loading, setLoading] = React.useState(true);
	const [error, setError] = React.useState(false);

	const fetchVans = React.useCallback(async () => {
		setLoading(true);
		setError(false);

		try {
			const response = await fetch("/api/host/vans");

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
	}, []);

	React.useEffect(() => {
		fetchVans();
	}, [fetchVans]);

	const vanElements = vans.map((van) => <HostVanCard key={van.id} van={van} />);

	if (loading) {
		return <LoadingSpinner />;
	}

	if (error) {
		return <ErrorMessage onRetry={fetchVans} />;
	}

	if (vans) {
		return (
			<>
				<h1 className="mt-14 mb-8 font-bold text-3xl text-coal">
					Your listed vans
				</h1>
				<div className="flex flex-col gap-4">{vanElements}</div>
			</>
		);
	}
}
