import { useOutletContext } from "react-router";
import type { Van } from "../../../shared/utils/types";

interface InfoRowProps {
	label: string;
	value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
	return (
		<div className="text-coal text-sm">
			<dt className="inline font-bold">{label}: </dt>
			<dd className="inline font-medium">{value}</dd>
		</div>
	);
}

export default function HostVanInfoPage() {
	const van = useOutletContext<Van>();

	return (
		<section>
			<dl className="flex flex-col gap-4">
				<InfoRow label="Name" value={van.name} />
				<InfoRow label="Category" value={van.type} />
				<InfoRow label="Description" value={van.description} />
				<InfoRow label="Visibility" value="Public" />
			</dl>
		</section>
	);
}
