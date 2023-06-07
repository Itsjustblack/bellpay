import React from "react";
import heroImage from "@images/heroImage2.png";
import Visa from "@icons/visaLogo.svg";
import MasterCard from "@icons/mastercardLogo.svg";
import Paypal from "@icons/paypalLogo.svg";
import Verve from "@icons/verveLogo.svg";

const HeroSection: React.FC = () => {
	return (
		<section>
			<div className="relative flex w-full flex-col items-center justify-between px-[32px] pt-20 lg:flex-row lg:space-x-10 lg:px-[70px] lg:pt-[100px]">
				<div className="mb-20 flex flex-col items-start lg:items-start">
					<span className="mb-8 text-center text-[55px] font-semibold leading-[62px] md:leading-[80px] lg:text-left lg:text-[70px] xl:text-[90px] xl:leading-[100px]">
						Making <br /> <span className="text-[#790096]">Payments</span> <br /> Simple
					</span>
					<p className="mb-6 max-w-[491.95px] break-words text-center text-base leading-[21px] text-[#00000099] lg:text-left lg:text-lg">Experience the ease, dependability, and security of our payment solutions by signing up with us today.</p>
					<button className="w-[266px] rounded-xl bg-[#790096] py-2 text-xl font-medium tracking-wide text-white focus:outline-0 lg:rounded-lg lg:py-2">Get Started</button>
				</div>
				<div
					style={{ zIndex: 1 }}
					className="relative bottom-0 right-0 flex max-h-[550px] max-w-[550px] flex-1 lg:absolute"
				>
					<img
						src={heroImage}
						className="h-full w-full object-fill"
					/>
				</div>
			</div>
			<div
				style={{ zIndex: 20 }}
				className="relative grid h-fit w-full grid-cols-4 items-center space-x-5 bg-[#790096] px-[35px] py-6"
			>
				<div className="flex max-h-[40px] flex-1">
					<img
						className="h-auto w-full object-contain"
						src={Visa}
						alt=""
					/>
				</div>
				<div className="flex max-h-[40px] flex-1">
					<img
						className="h-auto w-full object-contain"
						src={MasterCard}
						alt=""
					/>
				</div>
				<div className="flex max-h-[40px] flex-1">
					<img
						className="h-auto w-full object-contain"
						src={Paypal}
						alt=""
					/>
				</div>
				<div className="flex max-h-[40px] flex-1">
					<img
						className="h-auto w-full object-contain"
						src={Verve}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
