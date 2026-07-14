import { useOutletContext } from "react-router";
import type { Van } from "../../types";

export default function HostVanPhotos() {
	const van = useOutletContext<Van>();

	return (
		<img
			src={van.imageUrl}
			alt={van.name}
			className="w-26 rounded-md object-cover"
		/>
	);
}
