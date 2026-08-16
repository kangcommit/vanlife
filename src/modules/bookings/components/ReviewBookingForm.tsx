import { useState } from "react";
import { cn } from "tailwind-variants";
import { useCreateReview } from "@/shared/domain/bookings/hooks/useCreateReview";
import { RatingButton } from "./RatingButton";

interface ReviewBookingFormProps {
	bookingId: string;
}

const ratingOptions = [1, 2, 3, 4, 5];

export function ReviewBookingForm({ bookingId }: ReviewBookingFormProps) {
	const [rating, setRating] = useState(5);
	const [text, setText] = useState("");
	const [formError, setFormError] = useState("");
	const { createReview, loading, error, success, reset } = useCreateReview();
	const buttonText = loading ? "Sending review..." : "Submit review";
	const statusMessage =
		formError ||
		error?.message ||
		(success ? "Thanks. Your review has been submitted." : "");

	function handleRatingChange(nextRating: number) {
		setRating(nextRating);
	}

	function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
		setText(event.target.value);
	}

	function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!text.trim()) {
			setFormError("Write a short review before submitting.");
			return;
		}

		setFormError("");
		reset();
		createReview({
			bookingId,
			rating,
			text: text.trim(),
		});
	}

	return (
		<form className="grid gap-3" onSubmit={handleSubmit}>
			<fieldset className="grid gap-2 sm:max-w-40">
				<legend className="font-semibold text-ink text-sm">Rating</legend>
				<div className="flex items-center gap-1">
					{ratingOptions.map((option) => (
						<RatingButton
							key={option}
							option={option}
							rating={rating}
							disabled={success}
							onChange={handleRatingChange}
						/>
					))}
				</div>
			</fieldset>

			<div className="grid gap-2">
				<label
					htmlFor={`review-text-${bookingId}`}
					className="font-semibold text-ink text-sm"
				>
					Review
				</label>
				<textarea
					id={`review-text-${bookingId}`}
					value={text}
					onChange={handleTextChange}
					disabled={success}
					rows={3}
					className="resize-none rounded-lg border border-line bg-surface px-3 py-2 font-medium text-muted outline-none ring-clay transition placeholder:text-soft focus:text-ink focus:ring-2 disabled:text-soft"
				/>
			</div>

			<div>
				<button
					type="submit"
					disabled={loading || success}
					className="rounded-lg bg-clay px-4 py-2 font-bold text-sm text-surface transition-colors hover:bg-clay-dark active:scale-95 disabled:bg-line disabled:text-muted"
				>
					{buttonText}
				</button>

				{statusMessage ? (
					<p
						className={cn(
							"mt-2 font-semibold text-sm",
							success ? "text-status-completed" : "text-status-cancelled",
						)}
					>
						{statusMessage}
					</p>
				) : null}
			</div>
		</form>
	);
}
