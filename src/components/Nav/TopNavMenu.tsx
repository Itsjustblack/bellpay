import circle from "@icons/circle.svg";
import { motion } from "framer-motion";

interface MenuItemProps {
	title: string;
	body: string;
}

const MenuItem = ({ title, body }: MenuItemProps) => {
	return (
		<div className="flex h-full items-start space-x-2">
			<img
				className="h-4 w-4 object-cover"
				src={circle}
				alt=""
			/>
			<div>
				<h3 className="text-[14px] font-semibold leading-3 tracking-wide"> {title} </h3>
				<p className="text-[15px] tracking-tight"> {body} </p>
			</div>
		</div>
	);
};

const TopNavMenu = () => {
	return (
		<motion.div
			initial={{ y: -200 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.8, ease: "easeIn" }}
			exit={{ height: 0 }}
			style={{ zIndex: 3 }}
			className="absolute right-[200px] top-[80px] hidden h-fit max-h-[250px] max-w-[672px] items-center justify-between space-x-[60px] rounded-2xl bg-[#790096] px-10 py-6 text-white lg:flex"
		>
			<div>
				<h2 className="mb-4 font-semibold tracking-wide">Payments</h2>
				<div className="flex flex-col items-start space-y-2">
					<MenuItem
						title="Bell Shop"
						body="Make payment through different channels"
					/>
					<MenuItem
						title="Bell CheckOut"
						body="Accept payments online"
					/>
					<MenuItem
						title="PayOuts"
						body="Make bulk payments with ease"
					/>
				</div>
			</div>
			<div>
				<h2 className="mb-4 text-sm font-semibold tracking-wide">Features</h2>
				<div className="flex flex-col items-start space-y-2">
					<MenuItem
						title="Bell Shop"
						body="Make payment through different channels"
					/>
					<MenuItem
						title="Bell CheckOut"
						body="Accept payments online"
					/>
					<MenuItem
						title="PayOuts"
						body="Make bulk payments with ease"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default TopNavMenu;
