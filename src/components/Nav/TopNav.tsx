import logo from "@icons/logoWithName.svg"; // @/assets/icons/logo.svg;
import menu from "@icons/menu.svg";
import { Link } from "react-router-dom";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
// import TopNavMenu from "./TopNavMenu";

export type NavItemProps = { path: string; title: string; onClick?: () => void };

const NavItem = ({ path, title, onClick }: NavItemProps) => {
	return (
		<div onClick={() => onClick?.()}>
			<Link
				className="text-base font-medium leading-[25.2px]"
				to={`${path}`}
			>
				{title}
			</Link>
		</div>
	);
};

type NavButtonProps = { path: string; title: string; type?: "invert" };

const NavButton = ({ path, title, type }: NavButtonProps) => {
	return (
		<Link
			className={`cursor-pointer rounded-[10px] border px-4 py-2 text-base font-medium leading-[25.2px] ${type === "invert" && "bg-black text-white"}`}
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
	// const [active, setActive] = useState(false);
	const [overlay, setOverlay] = useState(false);
	const { scrollY } = useScroll();
	useMotionValueEvent(scrollY, "change", (latest) => {
		if (latest > 0) {
			setOverlay(true);
			// if (latest > 20) setActive(false);
		} else {
			setOverlay(false);
		}
	});
	return (
		<div>
			<div
				style={{ zIndex: 100 }}
				className={`fixed top-0 flex h-[57.3px] w-full flex-row items-center justify-between space-x-[40px] bg-white px-8 transition-shadow duration-[0.5s] lg:h-[75px] lg:px-[60px] xl:px-[120px] ${overlay && "shadow"}`} /* shadow */
			>
				<img
					src={logo}
					className="h-[28px] w-[108px] lg:h-[35px] lg:w-[140px]"
				/>
				<img
					style={{ zIndex: 100 }}
					onClick={() => setOpen((prev) => !prev)}
					src={menu}
					className="h-8 w-8 cursor-pointer lg:hidden"
				/>
				<div className="hidden justify-center space-x-[50px] lg:flex">
					<NavItem
						// onClick={() => setActive((prev) => !prev)}
						path="/"
						title="Products"
					/>
					<NavItem
						path="/about"
						title="About Us"
					/>
					<NavItem
						path="/"
						title="Blog"
					/>
					<NavItem
						path="/faq"
						title="FAQ"
					/>
				</div>
				<div className="hidden space-x-3 lg:flex xl:space-x-[30px]">
					<NavButton
						path="/comingsoon"
						title="Sign In"
					/>
					<NavButton
						path="/gh"
						title="Create Free Account"
						type="invert"
					/>
				</div>
			</div>
			{/* {active && <TopNavMenu />} */}
		</div>
	);
};

export default TopNav;
