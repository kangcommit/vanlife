import { useOutletContext } from "react-router";
import type { Van } from "@/shared/domain/vans/types";

export default function HostVanPricingPage() {
	const van = useOutletContext<Van>();

	return (
		<p className="font-medium">
			<span className="text-2xl text-coal">${van.price}</span>
			<span className="text-base text-slate">/day</span>
		</p>
	);
}
