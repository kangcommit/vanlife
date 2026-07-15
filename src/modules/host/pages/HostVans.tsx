import React from "react";
import LoadingSpinner from "../../../components/LoadingSpinner";
import type { Van, VansResponse } from "../../../utils/types";
import HostVanCard from "../components/HostVanCard";

export default function HostVans() {
	const [vans, setVans] = React.useState<Van[]>([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		setLoading(true);

		fetch("/api/host/vans")
			.then((res) => res.json())
			.then((data: VansResponse) => setVans(data.vans))
			.finally(() => setLoading(false));
	}, []);

	const vanElements = vans.map((van) => <HostVanCard key={van.id} van={van} />);

	if (loading) {
		return <LoadingSpinner />;
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
