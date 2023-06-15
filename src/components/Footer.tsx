import React from "react";
import logoWithName from "@icons/logoWithName.svg";
import twitter from "@icons/twitter.svg";
import facebook from "@icons/facebook.svg";
import instagram from "@icons/instagram.svg";
import { Link } from "react-router-dom";

export type NavItemProps = { path: string; title: string };

const NavItem = ({ path, title }: NavItemProps) => {
	return (
		<Link
			className="cursor-pointer text-sm tracking-wide"
			to={`${path}`}
		>
			{title}
		</Link>
	);
};

const Footer: React.FC = () => {
	return (
		<footer
			style={{ zIndex: 20 }}
			className="border-t-[0.2px] px-8 pb-5 pt-8 sm:px-[50px]"
		>
			{/* Mobile Footer */}

			<div className="relative grid w-full grid-cols-3 justify-center gap-x-10 md:hidden">
				<div className="mt-2 flex w-fit flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Company</h2>
					<a className="text-sm tracking-wide">About Us</a>
					<a className="text-sm tracking-wide">Blog</a>
					<a className="text-sm tracking-wide">FAQs</a>
				</div>
				<div className="mt-2 flex w-fit flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Legal</h2>
					<a className="text-sm tracking-wide">Terms of Service</a>
					<a className="text-sm tracking-wide">Developers</a>
				</div>
				<div className="flex w-fit flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Products</h2>
					<a className="text-sm tracking-wide">Bell Shop</a>
					<a className="text-sm tracking-wide">Bell Payment Links</a>
					<a className="text-sm tracking-wide">Bell CheckOut</a>
					<a className="text-sm tracking-wide">BellMi</a>
					<a className="text-sm tracking-wide">Payouts</a>
					<a className="text-sm tracking-wide">Bills n Pay</a>
				</div>
				<div className="relative bottom-[75px] flex w-fit flex-col space-y-3 md:bottom-5">
					<h2 className="text-sm font-semibold tracking-wide">Resources</h2>
					<a className="text-sm tracking-wide">Career Opportunities</a>
					<a className="text-sm tracking-wide">What are our customers saying?</a>
					<a className="text-sm tracking-wide">Contact us</a>
				</div>
				<div className="hidden w-fit flex-col space-y-3 sm:flex">
					<h2 className="text-sm font-semibold tracking-wide">Help</h2>
					<a className="text-sm tracking-wide">Contact Us</a>
					<a className="text-sm tracking-wide">Terms of Service</a>
					<a className="text-sm tracking-wide">Privacy and Policy</a>
				</div>
			</div>

			{/* Desktop Footer */}
			<div className="hidden justify-between space-x-10 md:flex lg:space-x-[76px]">
				<div className="mt-2 flex w-full flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Company</h2>
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
						title="FAQs"
					/>
				</div>
				<div className="mt-2 flex w-full flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Legal</h2>
					<NavItem
						path="/"
						title="Terms of Service"
					/>
					<NavItem
						path="/"
						title="Developers"
					/>
				</div>
				<div className="flex w-full flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Products</h2>
					<NavItem
						path="/"
						title="Bell Shop"
					/>
					<NavItem
						path="/"
						title="Bell Payment Links"
					/>
					<NavItem
						path="/"
						title="Bell CheckOut"
					/>
					<NavItem
						path="/"
						title="BellMi"
					/>
					<NavItem
						path="/"
						title="Payouts"
					/>
					<NavItem
						path="/"
						title="Bills n Pay"
					/>
				</div>
				<div className="flex w-full flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Resources</h2>
					<NavItem
						path="/"
						title="Career Opportunities"
					/>
					<NavItem
						path="/"
						title="What are our customers saying?"
					/>
					{/* <NavItem
						path="/"
						title="Contact us"
					/> */}
				</div>
				<div className="flex w-full flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Help</h2>
					<NavItem
						path="/"
						title="Contact Us"
					/>
					<NavItem
						path="/"
						title="Terms of Service"
					/>
					<NavItem
						path="/"
						title="Privacy and Policy"
					/>
				</div>
			</div>

			<div className="mb-8 mt-[100px] flex items-center justify-between">
				<img
					src={logoWithName}
					className="max-w-[159.1px] object-cover"
				/>
				<div className="flex justify-around space-x-3">
					<a
						href="https://twitter.com/getbellpay"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={twitter}
							className="h-[25px] w-[25px] cursor-pointer lg:h-[42px] lg:w-[42px]"
						/>
					</a>
					<a
						href="https://facebook.com/getbellpay"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={facebook}
							className="h-[25px] w-[25px] cursor-pointer lg:h-[42px] lg:w-[42px]"
						/>
					</a>
					<a
						href="https://instagram.com/getbellpay"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={instagram}
							className="h-[25px] w-[25px] cursor-pointer lg:h-[42px] lg:w-[42px]"
						/>
					</a>
				</div>
			</div>
			<p className="text-center text-[12px] leading-[16.88px] lg:text-base">@Copyright BellPay, TronField Technologies Limited</p>
		</footer>
	);
};

export default Footer;
