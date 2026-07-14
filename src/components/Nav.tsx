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

const navLink = tv({
	base: "transition-colors hover:text-[#161616] hover:underline",
	variants: {
		active: {
			true: "font-bold text-[#161616] underline",
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
					className={({ isActive }) => navLink({ active: isActive })}
				>
					{link.label}
				</NavLink>
			))}
		</nav>
	);
}
