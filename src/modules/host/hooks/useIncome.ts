import { useQuery } from "@tanstack/react-query";
import { hostQueryKeys } from "../queryKeys";
import { getIncome } from "../services/statsService";

interface UseIncomeOptions {
	days?: number;
}

export function useIncome({ days = 30 }: UseIncomeOptions = {}) {
	const { isPending, error, data, refetch } = useQuery({
		queryKey: hostQueryKeys.income(days),
		queryFn: () => getIncome(days),
	});

	return { loading: isPending, error, income: data, refetch };
}
