export const vanQueryKeys = {
	list: () => ["vans"] as const,
	detail: (id: string) => ["vans", id] as const,
	hostList: () => ["host", "vans"] as const,
	hostDetail: (id: string) => ["host", "vans", id] as const,
};
