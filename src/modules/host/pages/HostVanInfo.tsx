import { useOutletContext } from "react-router";
import type { Van } from "../../../utils/types";

interface InfoRowProps {
	label: string;
	value: string;
}

function InfoRow({ label, value }: InfoRowProps) {
	return (
		<div className="text-[#161616] text-sm">
			<h4 className="inline font-bold">{label}: </h4>
			<span className="font-medium">{value}</span>
		</div>
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
