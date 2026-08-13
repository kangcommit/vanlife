export const paths = {
	// Root
	home: "/",
	about: "about",
	signIn: "sign-in",
	vans: "vans",
	vanDetail: "vans/:id",

	// Host
	host: "host",
	hostIncome: "income",
	hostReviews: "reviews",
	hostVanPricing: "pricing",
	hostVanPhotos: "photos",

	// Fallback
	notFound: "*",
} as const;
