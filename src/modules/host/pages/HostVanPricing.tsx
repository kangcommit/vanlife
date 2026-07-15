import { useOutletContext } from "react-router";
import type { Van } from "../../../utils/types";

export default function HostVanPricing() {
	const van = useOutletContext<Van>();

	return (
		<p className="font-medium">
			<span className="text-2xl text-[#161616]">${van.price}</span>
			<span className="text-[#4D4D4D] text-base">/day</span>
		</p>
	);
}
