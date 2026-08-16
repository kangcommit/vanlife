import { useQuery } from "@tanstack/react-query";
import { bookingQueryKeys } from "../queryKeys";
import { getBookings } from "../services/bookingService";

export function useBookings() {
	const { isPending, error, data, refetch } = useQuery({
		queryKey: bookingQueryKeys.list,
		queryFn: getBookings,
	});

	return { loading: isPending, error, bookings: data ?? [], refetch };
}
