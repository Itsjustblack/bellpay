import React from "react";
import heroImage from "@images/heroImage2.png";
import ScrollWheel from "../../components/ScrollWheel";

const HeroSection: React.FC = () => {
	return (
		<div className="relative lg:h-[650px]">
			<div className="mx-auto flex flex-col items-center justify-center px-[32px] pt-16 md:flex-row md:px-[50px] lg:space-x-[50px] lg:px-[70px] xl:px-[100px]">
				<div className="mb-10 flex flex-col items-center md:items-start lg:w-[50%]">
					<h2 className="mb-6 block text-center text-[55px] font-semibold leading-[62px] md:text-left md:text-[45px] md:leading-[50px] lg:text-left lg:text-[70px] xl:text-[90px] xl:leading-[100px]">
						Making <br /> <span className="text-[#790096]">Payments</span> <br /> Simple
					</h2>
					<p className="mb-6 max-w-[491.95px] break-words text-center text-base leading-[21px] text-[#00000099] md:text-left lg:text-left lg:text-lg">Experience the ease, dependability, and security of our payment solutions by signing up with us today.</p>
					<button className="w-[266px] rounded-xl bg-[#790096] py-2 text-xl font-medium tracking-wide text-white focus:outline-0 lg:rounded-lg lg:py-2">Get Started</button>
				</div>
				<div className="relative -bottom-[24px] max-h-[500px] max-w-[500px] xl:-bottom-[30px]">
					<img
						src={heroImage}
						className="h-full w-full object-contain"
					/>
				</div>
			</div>
			<ScrollWheel />
		</div>
	);
};

export default HeroSection;
