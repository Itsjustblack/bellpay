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
			initial={{ x: 400 }}
			animate={{ x: 0 }}
			exit={{ x: 400 }}
			transition={{
				type: "spring",
				stiffness: 260,
				damping: 20,
				duration: 0.3,
			}}
		>
			{children}
		</motion.div>
	);
};

export default Layout;
