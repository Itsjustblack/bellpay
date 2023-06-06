import React, { useState } from "react";
import TopNav from "./TopNav.tsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import SideNav from "./SideNav";

interface NavWrapperProps {
	children: JSX.Element;
	// setOpen: Dispatch<SetStateAction<boolean>>;
}

const NavWrapper: React.FC<NavWrapperProps> = ({ children }) => {
	const [open, setOpen] = useState(false);
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [pathname]);

	return (
		<div>
			<TopNav
				Open={open}
				setOpen={setOpen}
			/>
			{/* <SideNav Open={open} /> */}
			<div className="mt-[60px] w-full">{open ? <SideNav Open={open} /> : children}</div>
		</div>
	);
};

export default NavWrapper;
