interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, type = "text", ...props }: InputProps) {
	return (
		<input
			type={type}
			{...props}
			className={`border border-smoke bg-white px-3 py-2 font-normal text-base text-slate shadow-sm ${className ?? ""}`}
		/>
	);
}
