import type { InputHTMLAttributes } from "react";
import { cn } from "tailwind-variants";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, type = "text", ...props }: InputProps) {
	return (
		<input
			type={type}
			{...props}
			className={cn(
				"border border-smoke bg-white px-3 py-2 font-normal text-base text-slate shadow-sm",
				className,
			)}
		/>
	);
}
