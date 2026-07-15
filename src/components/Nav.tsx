import { NavLink } from "react-router";
import { tv } from "tailwind-variants";
import type { NavItem } from "../utils/types";

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
	base: "transition-colors hover:font-bold hover:text-[#161616] hover:underline",
	variants: {
		active: {
			true: "font-bold text-[#161616] underline",
		},
	},
});

interface NavProps {
	links: NavItem[];
	variant?: "primary" | "secondary";
	className?: string;
}

export function Nav({ links, variant = "primary", className }: NavProps) {
	return (
		<nav className={nav({ variant, class: className })}>
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
