import { Link } from "react-router";
import AboutHero from "../assets/images/about-hero.png";

export default function About() {
	return (
		<section>
			<img
				src={AboutHero}
				alt="A camper van parked in a scenic location"
				className="w-full"
			/>

			<div className="mb-14 flex flex-col gap-8 px-6.5 py-12">
				<h1 className="font-bold text-3xl text-coal">
					Don't squeeze in a sedan when you could relax in a van.
				</h1>
				<p className="font-medium text-base text-coal">
					Our mission is to enliven your road trip with the perfect travel van
					rental. Our vans are recertified before each trip to ensure your
					travel plans can go off without a hitch. (Hitch costs extra 😉)
					<br />
					<br />
					Our team is full of vanlife enthusiasts who know firsthand the magic
					of touring the world on 4 wheels.
				</p>
			</div>

			<div className="mx-6.5 mb-13 flex flex-col items-start gap-6 rounded-sm bg-orange-light px-9 py-8">
				<h2 className="font-bold text-2xl text-coal">
					Your destination is waiting. Your van is ready.
				</h2>
				<Link
					to="/vans"
					className="rounded-xl bg-coal px-5.5 py-3 font-bold text-base text-white"
				>
					Explore our vans
				</Link>
			</div>
		</section>
	);
}
