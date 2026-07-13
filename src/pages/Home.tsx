import HomeHero from "../assets/images/home-hero.png";

export default function Home() {
	return (
		<section className="relative flex min-h-screen flex-1 flex-col justify-center overflow-hidden px-5 sm:px-8">
			<img
				src={HomeHero}
				alt=""
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>

			<h1 className="mb-5.5 max-w-xl font-extrabold text-4xl text-white">
				You got the travel plans, we got the travel vans.
			</h1>

			<p className="mb-12.5 max-w-lg font-medium text-base text-white">
				Add adventure to your life by joining the #vanlife movement. Rent the
				perfect van to make your perfect road trip.
			</p>

			<button
				type="button"
				className="w-full rounded-sm bg-[#FF8C38] py-2.5 font-bold text-base text-white transition-colors hover:bg-[#e57d2f] sm:w-fit sm:min-w-64 sm:px-8"
			>
				Find your van
			</button>
		</section>
	);
}
