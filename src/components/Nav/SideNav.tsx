import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { NavItemProps } from "./TopNav";
import React from "react";

interface SideNavProps {
	Open: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ title, path }) => {
	return (
		<>
			<Link
				to={`/${path}`}
				className="p-4 text-base  tracking-wide"
			>
				{title}
			</Link>
			<hr />
		</>
	);
};

const SideNav: React.FC<SideNavProps> = ({ Open }) => {
	return Open ? (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.6, ease: "easeIn" }}
			style={{ zIndex: 10 }}
			className="navItems mt-[100px] flex h-full w-full flex-col items-center space-y-3 bg-white lg:hidden"
		>
			<NavItem
				path=""
				title="Products"
			/>
			<NavItem
				path="about"
				title="About Us"
			/>
			<NavItem
				path=""
				title="Blog"
			/>
			<NavItem
				path="faq"
				title="FAQ"
			/>
		</motion.div>
	) : (
		<></>
	);
};

export default SideNav;
