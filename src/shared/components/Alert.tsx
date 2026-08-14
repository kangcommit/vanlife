import type { ReactNode } from "react";
import { FaCircleInfo, FaTriangleExclamation } from "react-icons/fa6";
import { tv, type VariantProps } from "tailwind-variants";

const alert = tv({
	slots: {
		base: "flex w-full items-start gap-3 rounded-lg border px-4 py-3",
		icon: "mt-0.5 shrink-0 text-base",
		text: "font-medium text-sm leading-6",
	},
	variants: {
		variant: {
			info: {
				base: "border-line bg-panel",
				icon: "text-clay",
				text: "text-ink",
			},
			error: {
				base: "border-red-200 bg-red-50",
				icon: "text-red-700",
				text: "text-red-950",
			},
		},
	},
	defaultVariants: {
		variant: "info",
	},
});

type AlertVariants = VariantProps<typeof alert>;

interface AlertProps extends AlertVariants {
	children: ReactNode;
}

export function Alert({ variant = "info", children }: AlertProps) {
	const { base, icon, text } = alert({ variant });

	const Icon = variant === "error" ? FaTriangleExclamation : FaCircleInfo;

	return (
		<div
			role={variant === "error" ? "alert" : "status"}
			aria-live={variant === "error" ? "assertive" : "polite"}
			className={base()}
		>
			<Icon aria-hidden className={icon()} />
			<p className={text()}>{children}</p>
		</div>
	);
}
