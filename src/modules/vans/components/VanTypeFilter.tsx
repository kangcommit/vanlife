import { tv } from "tailwind-variants";
import { capitalize } from "../../../utils/format";
import type { VanType } from "../../../utils/types";

const vanTypeButton = tv({
	base: "h-9 w-26 cursor-pointer rounded-md bg-peach text-base transition-colors",
	variants: {
		type: {
			simple:
				"hover:bg-terracotta hover:text-peach data-[selected=true]:bg-terracotta",
			luxury: "hover:bg-coal hover:text-peach data-[selected=true]:bg-coal",
			rugged: "hover:bg-teal hover:text-peach data-[selected=true]:bg-teal",
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
	onSelect(type: string): void;
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
						data-selected={selectedType === type}
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
