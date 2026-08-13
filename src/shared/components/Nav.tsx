import { NavLink } from "react-router";
import { tv, type VariantProps } from "tailwind-variants";
import type { NavItem } from "../utils/types";

const nav = tv({
	base: "flex text-base text-slate",
	variants: {
		variant: {
			primary: "gap-6 font-semibold",
			secondary: "gap-7 font-medium",
		},
	},
});

const navLink = tv({
	base: "transition-colors hover:font-bold hover:text-coal hover:underline",
	variants: {
		active: {
			true: "font-bold text-coal underline",
		},
	},
});

type NavVariants = VariantProps<typeof nav>;

interface NavProps extends NavVariants {
	links: NavItem[];
	ariaLabel?: string;
	className?: string;
}

export function Nav({
	links,
	ariaLabel,
	variant = "primary",
	className,
}: NavProps) {
	return (
		<nav aria-label={ariaLabel} className={nav({ variant, class: className })}>
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
