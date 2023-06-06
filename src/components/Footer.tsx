import React from "react";
import logoWithName from "@icons/logoWithName.svg";
import twitter from "@icons/twitter.svg";
import facebook from "@icons/facebook.svg";
import instagram from "@icons/instagram.svg";

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
					<a className="text-sm tracking-wide">About Us</a>
					<a className="text-sm tracking-wide">Blog</a>
					<a className="text-sm tracking-wide">FAQs</a>
				</div>
				<div className="mt-2 flex w-full flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Legal</h2>
					<a className="text-sm tracking-wide">Terms of Service</a>
					<a className="text-sm tracking-wide">Developers</a>
				</div>
				<div className="flex w-full flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Products</h2>
					<a className="text-sm tracking-wide">Bell Shop</a>
					<a className="text-sm tracking-wide">Bell Payment Links</a>
					<a className="text-sm tracking-wide">Bell CheckOut</a>
					<a className="text-sm tracking-wide">BellMi</a>
					<a className="text-sm tracking-wide">Payouts</a>
					<a className="text-sm tracking-wide">Bills n Pay</a>
				</div>
				<div className="flex w-full flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Resources</h2>
					<a className="text-sm tracking-wide">Career Opportunities</a>
					<a className="text-sm tracking-wide">What are our customers saying?</a>
					<a className="text-sm tracking-wide">Contact us</a>
				</div>
				<div className="flex w-full flex-col space-y-3">
					<h2 className="text-sm font-semibold tracking-wide">Help</h2>
					<a className="text-sm tracking-wide">Contact Us</a>
					<a className="text-sm tracking-wide">Terms of Service</a>
					<a className="text-sm tracking-wide">Privacy and Policy</a>
				</div>
			</div>

			<div className="mb-8 mt-[100px] flex items-center justify-between">
				<img
					src={logoWithName}
					className="max-w-[159.1px] object-cover"
				/>
				<div className="flex justify-around space-x-3">
					<img
						src={twitter}
						className="h-[25px] w-[25px] lg:h-[42px] lg:w-[42px]"
					/>
					<img
						src={facebook}
						className="h-[25px] w-[25px] lg:h-[42px] lg:w-[42px]"
					/>
					<img
						src={instagram}
						className="h-[25px] w-[25px] lg:h-[42px] lg:w-[42px]"
					/>
				</div>
			</div>
			<p className="text-center text-[12px] leading-[16.88px] lg:text-base">@Copyright BellPay, TronField Technologies Limited</p>
		</footer>
	);
};

export default Footer;

{
	/* <div className="md:hidden w-full flex justify-around space-x-5">
				<div className="flex flex-col space-y-[60px]">
					<div className="flex flex-col space-y-3 mt-2 w-full">
						<h2 className="font-semibold tracking-wide text-sm">Company</h2>
						<a className="text-sm tracking-wide">About Us</a>
						<a className="text-sm tracking-wide">Blog</a>
						<a className="text-sm tracking-wide">FAQs</a>
					</div>
					<div className="flex flex-col space-y-3 mt-2 w-full">
						<h2 className="font-semibold tracking-wide text-sm">Legal</h2>
						<a className="text-sm tracking-wide">Terms of Service</a>
						<a className="text-sm tracking-wide">Developers</a>
					</div>
					<div className="flex flex-col space-y-3 w-[60%]">
						<h2 className="font-semibold tracking-wide text-sm">Resources</h2>
						<a className="text-sm tracking-wide">Career Opportunities</a>
						<a className="text-sm tracking-wide">What are our customers saying?</a>
						<a className="text-sm tracking-wide">Contact us</a>
					</div>
				</div>
				<div className="flex flex-col space-y-3">
					<h2 className="font-semibold tracking-wide text-sm">Products</h2>
					<a className="text-sm tracking-wide">Bell Shop</a>
					<a className="text-sm tracking-wide">Bell Payment Links</a>
					<a className="text-sm tracking-wide">Bell CheckOut</a>
					<a className="text-sm tracking-wide">BellMi</a>
					<a className="text-sm tracking-wide">Payouts</a>
					<a className="text-sm tracking-wide">Bills n Pay</a>
				</div>
			</div> */
}
