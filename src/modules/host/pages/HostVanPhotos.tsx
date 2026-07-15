import { useOutletContext } from "react-router";
import type { Van } from "../../../utils/types";

export default function HostVanPhotos() {
	const van = useOutletContext<Van>();

	return (
		<img src={van.imageUrl} alt={van.name} className="size-26 rounded-md" />
	);
}
