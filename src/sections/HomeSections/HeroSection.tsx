import React from "react";
import heroImage from "@icons/heroImage.svg";

const HeroSection: React.FC = () => {
	return (
		<section className="relative flex w-full flex-col items-center justify-around px-8 lg:flex-row lg:space-x-10">
			<div>
				<span className="mb-6 text-center text-[55px] font-semibold leading-[80px] lg:text-left lg:text-[70px] xl:text-[90px] xl:leading-[100px]">
					Making <br /> Payments <br /> Simple
				</span>
				<p className=" mb-4 max-w-[491.95px] break-words text-center text-base leading-[18.64px] text-[#00000099] lg:text-left lg:text-lg">Experience the ease, dependability, and security of our payment solutions by signing up with us today.</p>
				<button className="max-w-[266px] rounded-[6px] bg-[#790096] px-4 py-1 font-medium tracking-wide text-white focus:outline-0 lg:rounded-lg lg:py-2">Get Started</button>
			</div>
			<div className="flex max-h-[500px] max-w-[400px] xl:max-h-[600px] xl:max-w-[541px]">
				<img
					src={heroImage}
					className="object-cover"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
