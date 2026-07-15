import { FaArrowLeftLong } from "react-icons/fa6";
import { type RelativeRoutingType, type To, useNavigate } from "react-router";

interface BackButtonProps {
	text?: string;
	className?: string;
	to?: To | number;
	relative?: RelativeRoutingType;
}

export default function BackButton({
	text = "Back to all vans",
	className = "",
	to = -1,
	relative,
}: BackButtonProps) {
	const navigate = useNavigate();

	const handleClick = () => {
		if (typeof to === "number") {
			navigate(to);
		} else {
			navigate(to, relative ? { relative } : undefined);
		}
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			className={`inline-flex cursor-pointer items-center gap-3 font-medium text-[#201F1D] text-base hover:underline ${className}`}
		>
			<FaArrowLeftLong className="text-[#858585]" />
			{text}
		</button>
	);
}
