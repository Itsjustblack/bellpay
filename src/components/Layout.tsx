import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [pathname]);
	return (
		<motion.div
			className="relative h-full w-full"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ opacity: { duration: 0.6, ease: "easeInOut" } }}
			// initial={{ x: 200 }}
			// animate={{ x: 0 }}
			// exit={{ x: 200 }}
			// transition={{
			// 	type: "spring",
			// 	stiffness: 260,
			// 	damping: 20,
			// 	duration: 0.3,
			// }}
		>
			{children}
		</motion.div>
	);
};

export default Layout;
