import { useOutletContext } from "react-router";
import type { Van } from "../../types";

interface InfoRowProps {
	label: string;
	value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
	return (
		<p className="text-[#161616] text-sm">
			<span className="font-bold">{label}: </span>
			<span className="font-medium">{value}</span>
		</p>
	);
}

export default function HostVanInfo() {
	const van = useOutletContext<Van>();

	return (
		<section className="flex flex-col gap-4">
			<InfoRow label="Name" value={van.name} />
			<InfoRow label="Category" value={van.type} />
			<InfoRow label="Description" value={van.description} />
			<InfoRow label="Visibility" value="Public" />
		</section>
	);
}
