import { NavLink } from "react-router";
import { tv } from "tailwind-variants";

const nav = tv({
	base: "flex text-[#4D4D4D] text-base",
	variants: {
		variant: {
			primary: "gap-6 font-semibold",
			secondary: "gap-7 font-medium",
		},
	},
});

type Link = {
	to: string;
	label: string;
	end?: boolean;
};
type NavProps = {
	links: Link[];
	variant?: "primary" | "secondary";
};

export function Nav({ links, variant = "primary" }: NavProps) {
	return (
		<nav className={nav({ variant })}>
			{links.map((link) => (
				<NavLink
					key={link.to}
					to={link.to}
					end={link.end}
					className={({ isActive }) =>
						`hover:text-[#161616] hover:underline ${
							isActive ? "font-bold text-[#161616] underline" : ""
						}`
					}
				>
					{link.label}
				</NavLink>
			))}
		</nav>
	);
}
