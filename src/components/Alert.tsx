import type { ReactNode } from "react";
import { FaCircleInfo, FaTriangleExclamation } from "react-icons/fa6";
import { tv } from "tailwind-variants";

const alert = tv({
	slots: {
		base: "flex w-full max-w-md items-start gap-3 rounded-md border px-4 py-3",
		icon: "mt-0.5 shrink-0 text-base",
		text: "font-medium text-sm leading-6",
	},
	variants: {
		variant: {
			info: {
				base: "border-amber-200 bg-amber-50",
				icon: "text-amber-600",
				text: "text-amber-900",
			},
			error: {
				base: "border-red-200 bg-red-50",
				icon: "text-red-600",
				text: "text-red-900",
			},
		},
	},
	defaultVariants: {
		variant: "info",
	},
});

type AlertProps = {
	variant?: "info" | "error";
	children: ReactNode;
};

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
