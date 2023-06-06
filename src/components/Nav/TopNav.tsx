import logo from "@icons/logoWithName.svg"; // @/assets/icons/logo.svg;
import menu from "@icons/menu.svg";
import { Link } from "react-router-dom";
// import close from "@icons/close.svg";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export type NavItemProps = { path: string; title: string };

const NavItem = ({ path, title }: NavItemProps) => {
	return (
		<Link
			className="text-base font-medium leading-[25.2px]"
			to={`${path}`}
		>
			{title}
		</Link>
	);
};

type NavButtonProps = { path: string; title: string; type?: "invert" };

const NavButton = ({ path, title, type }: NavButtonProps) => {
	return (
		<Link
			className={`rounded-[10px] border px-4 py-2 text-base font-medium leading-[25.2px] ${type === "invert" && "bg-black text-white"}`}
			to={`${path}`}
		>
			{title}
		</Link>
	);
};

interface TopNavProps {
	Open?: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

const TopNav: React.FC<TopNavProps> = ({ setOpen }) => {
	const [active, setActive] = useState(false);
	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 0) {
			setActive(true);
		} else {
			setActive(false);
		}
	});
	return (
		<div
			style={{ zIndex: 99 }}
			className={`fixed top-0 flex h-[57.3px] w-full flex-row items-center justify-between space-x-[40px] bg-white px-8 transition-shadow duration-[0.5s] lg:h-[75px] lg:px-[60px] xl:px-[120px] ${active && "shadow"}`} /* shadow */
		>
			<img
				src={logo}
				className="h-[28px] w-[108px] lg:h-[35px] lg:w-[140px]"
			/>
			<img
				onClick={() => setOpen((prev) => !prev)}
				src={menu}
				className="h-8 w-8 lg:hidden"
			/>
			<div className="hidden justify-center space-x-[50px] lg:flex">
				<NavItem
					path=""
					title="Products"
				/>
				<NavItem
					path="/about"
					title="About Us"
				/>
				<NavItem
					path=""
					title="Blog"
				/>
				<NavItem
					path="/faq"
					title="FAQ"
				/>
			</div>
			<div className="hidden space-x-3 lg:flex xl:space-x-[30px]">
				<NavButton
					path=""
					title="Sign In"
				/>
				<NavButton
					path=""
					title="Create Free Account"
					type="invert"
				/>
			</div>
		</div>
	);
};

export default TopNav;
