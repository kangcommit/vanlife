export const hostQueryKeys = {
	dashboard: (days: number) => ["host", "dashboard", { days }] as const,
	income: (days: number) => ["host", "income", { days }] as const,
	reviews: (days: number) => ["host", "reviews", { days }] as const,
};
