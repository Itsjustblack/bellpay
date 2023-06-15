import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { Dispatch, SetStateAction } from "react";

interface SideNavProps {
	Open: boolean;
	setOpen: Dispatch<SetStateAction<boolean>>;
}

export type NavItemProps = { path: string; title: string; setOpen: Dispatch<SetStateAction<boolean>> };

const NavItem: React.FC<NavItemProps> = ({ title, path, setOpen }) => {
	return (
		<>
			<Link
				onClick={() => setOpen((prev) => !prev)}
				to={`/${path}`}
				className="w-full p-4  text-center text-base tracking-wide"
			>
				{title}
			</Link>
			<hr />
		</>
	);
};

const SideNav: React.FC<SideNavProps> = ({ Open, setOpen }) => {
	return (
		<AnimatePresence>
			{Open && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ opacity: { duration: 0.6, ease: "easeInOut" } }}
					style={{ zIndex: 10 }}
					className="navItems mt-6 flex h-full w-full flex-col items-center space-y-3 bg-white lg:hidden"
				>
					<NavItem
						path=""
						title="Products"
						setOpen={setOpen}
					/>
					<NavItem
						path="about"
						title="About Us"
						setOpen={setOpen}
					/>
					<NavItem
						path=""
						title="Blog"
						setOpen={setOpen}
					/>
					<NavItem
						path="faq"
						title="FAQ"
						setOpen={setOpen}
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default SideNav;
