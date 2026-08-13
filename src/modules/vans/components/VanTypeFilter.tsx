import { tv } from "tailwind-variants";
import { capitalize } from "../../../shared/utils/format";
import type { VanType } from "../../../shared/utils/types";

const vanTypeButton = tv({
	base: "h-9 w-26 cursor-pointer rounded-md bg-peach text-base transition-colors",
	variants: {
		type: {
			simple: "hover:bg-terracotta hover:text-peach aria-pressed:bg-terracotta",
			luxury: "hover:bg-coal hover:text-peach aria-pressed:bg-coal",
			rugged: "hover:bg-teal hover:text-peach aria-pressed:bg-teal",
		},
		selected: {
			true: "font-semibold text-peach",
			false: "text-slate",
		},
	},
});

interface VanTypeFilterProps {
	types: VanType[];
	selectedType: string | null;
	onSelect(type: VanType): void;
}

export default function VanTypeFilter({
	types,
	selectedType,
	onSelect,
}: VanTypeFilterProps) {
	return (
		<div className="flex flex-wrap gap-3">
			{types.map((type) => {
				return (
					<button
						key={type}
						type="button"
						aria-pressed={selectedType === type}
						onClick={() => onSelect(type)}
						className={vanTypeButton({
							type,
							selected: selectedType === type,
						})}
					>
						{capitalize(type)}
					</button>
				);
			})}
		</div>
	);
}
