import { useMutation, useQueryClient } from "@tanstack/react-query";
import { bookingQueryKeys } from "../queryKeys";
import { cancelBooking } from "../services/bookingService";

export function useCancelBooking() {
	const queryClient = useQueryClient();
	const { mutate, isPending, error, reset } = useMutation({
		mutationFn: cancelBooking,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: bookingQueryKeys.list });
		},
	});

	return {
		cancelBooking: mutate,
		loading: isPending,
		error,
		reset,
	};
}
