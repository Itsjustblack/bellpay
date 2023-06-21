import React, { useState } from "react";
import TopNav from "./TopNav.tsx";
import SideNav from "./SideNav";

interface NavWrapperProps {
	children: JSX.Element;
	// setOpen: Dispatch<SetStateAction<boolean>>;
}

const NavWrapper: React.FC<NavWrapperProps> = ({ children }) => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<TopNav
				Open={open}
				setOpen={setOpen}
			/>
			<div className="w-full pt-[60px]">
				{open ? (
					<SideNav
						setOpen={setOpen}
						Open={open}
					/>
				) : (
					children
				)}
			</div>
		</div>
	);
};

export default NavWrapper;
