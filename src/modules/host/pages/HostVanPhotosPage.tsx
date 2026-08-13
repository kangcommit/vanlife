import { useOutletContext } from "react-router";
import type { Van } from "../../../shared/utils/types";

export default function HostVanPhotosPage() {
	const van = useOutletContext<Van>();

	return (
		<img src={van.imageUrl} alt={van.name} className="size-26 rounded-md" />
	);
}
