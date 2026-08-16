interface BookingStatusProps {
	message: string;
	variant: "error" | "success";
}

export function BookingStatus({ message, variant }: BookingStatusProps) {
	const statusClassName =
		variant === "success"
			? "rounded-lg bg-sage px-4 py-3 font-semibold text-sm text-surface"
			: "rounded-lg bg-clay/10 px-4 py-3 font-semibold text-clay text-sm";

	return (
		<div aria-live="polite" className="min-h-11">
			{message ? <p className={statusClassName}>{message}</p> : null}
		</div>
	);
}
