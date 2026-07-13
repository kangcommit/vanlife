import { Link } from "react-router";
import AboutHero from "../assets/images/about-hero.png";

export default function About() {
	return (
		<section>
			<img src={AboutHero} alt="" className="h-58 w-full object-cover" />

			<div className="mb-14 px-6.5 py-12">
				<h1 className="font-bold text-[#161616] text-[32px]">
					Don't squeeze in a sedan when you could relax in a van.
				</h1>
				<p className="font-medium text-[#161616] text-base">
					Our mission is to enliven your road trip with the perfect travel van
					rental. Our vans are recertified before each trip to ensure your
					travel plans can go off without a hitch. (Hitch costs extra 😉)
					<br />
					<p>
						Our team is full of vanlife enthusiasts who know firsthand the magic
						of touring the world on 4 wheels.
					</p>
				</p>
			</div>

			<div className="mx-6.5 mb-13 flex flex-col items-start gap-6 rounded-sm bg-[#FFCC8D] px-9 py-8">
				<h2 className="font-bold text-2xl text-[#161616]">
					Your destination is waiting. Your van is ready.
				</h2>
				<Link
					to={""}
					className="rounded-[10px] bg-[#161616] px-5.5 py-3 font-bold text-base text-white"
				>
					Explore our vans
				</Link>
			</div>
		</section>
	);
}
