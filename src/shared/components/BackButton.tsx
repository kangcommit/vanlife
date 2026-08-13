import { FaArrowLeft } from "react-icons/fa6";
import { Link, type To } from "react-router";
import { cn } from "tailwind-variants";

interface BackButtonProps {
	text?: string;
	to: To;
	className?: string;
}

export function BackButton({
	text = "Back to all vans",
	to,
	className,
}: BackButtonProps) {
	return (
		<Link
			to={to}
			relative="path"
			className={cn(
				"inline-flex items-center gap-3",
				"font-medium text-base text-charcoal",
				"hover:underline",
				className,
			)}
		>
			<FaArrowLeft className="text-gray" />
			{text}
		</Link>
	);
}
