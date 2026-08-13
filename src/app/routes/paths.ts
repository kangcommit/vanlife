export const paths = {
	// Root
	home: "/",
	about: "about",
	signIn: "sign-in",
	vans: "vans",
	vansDetail: "vans/:id",

	// Host
	host: "host",
	hostVans: "vans",
	hostVansDetail: "vans/:id",
	hostVanPricing: "pricing",
	hostVanPhotos: "photos",
	hostIncome: "income",
	hostReviews: "reviews",

	// Fallback
	notFound: "*",
} as const;
