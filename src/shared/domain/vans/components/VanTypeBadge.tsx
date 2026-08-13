import { tv } from "tailwind-variants";
import { capitalize } from "@/shared/utils/format";
import type { VanType } from "../types";

const vanTypeBadge = tv({
	base: "rounded-md px-3 py-1 font-semibold text-base text-peach",
	variants: {
		type: {
			simple: "bg-terracotta",
			luxury: "bg-coal",
			rugged: "bg-teal",
		},
	},
});

interface VanTypeBadgeProps {
	type: VanType;
	className?: string;
}

export default function VanTypeBadge({ type, className }: VanTypeBadgeProps) {
	return (
		<span className={vanTypeBadge({ type, className })}>
			{capitalize(type)}
		</span>
	);
}
