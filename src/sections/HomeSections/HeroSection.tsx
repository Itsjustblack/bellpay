import React, { useContext } from "react";
import heroImage from "@images/bg-hero.jpg";
import ScrollWheel from "../../components/ScrollWheel.jsx";
import play from "@icons/play.svg";
import { VideoContextState, videoContext } from "../../context/VideoContext.jsx";

const HeroSection: React.FC = () => {
	const { setActive } = useContext<VideoContextState>(videoContext);
	return (
		<div className="relative">
			<div className="mx-auto flex flex-col items-center justify-center px-[32px] pt-16 md:flex-row md:space-x-[50px] md:px-[50px] lg:px-[70px] xl:px-[100px]">
				<div className="mb-10 flex flex-col items-center md:w-[50%] md:items-start">
					<h2 className="mb-6 block text-center text-[55px] font-semibold leading-[66px] md:text-left md:text-[65px] lg:text-[70px] xl:text-[90px] xl:leading-[100px]">
						Making <br /> <span className="text-[#790096]">Payments</span> <br /> Simple
					</h2>
					<p className="mb-6 max-w-[491.95px] break-words text-center text-base leading-[21px] text-[#00000099] md:text-left lg:text-left lg:text-lg">Experience the ease, dependability, and security of our payment solutions by signing up with us today.</p>
					<button className="w-[266px] rounded-xl bg-[#790096] py-2 text-xl font-medium tracking-wide text-white focus:outline-0 lg:rounded-lg lg:py-2">Get Started</button>
				</div>
				<div className="hero relative mb-6 flex max-h-[250px] max-w-[350px] flex-1 overflow-hidden rounded-xl md:mb-10 lg:mb-0 lg:max-h-[300px] lg:max-w-[450px]">
					<div className="absolute flex h-full w-full cursor-pointer items-center justify-center bg-[#79009663] opacity-60">
						<img
							onClick={() => setActive(true)}
							src={play}
							className="w-[80px] object-contain transition-all duration-[0.6s] hover:scale-150"
						/>
						{/* <svg
							onClick={() => setActive(true)}
							height="80"
							width="80"
							className="hidden transition-all duration-[0.6s] hover:scale-125 lg:block"
						>
							<circle
								cx="40"
								cy="40"
								r="40"
								fill="white"
							/>
						</svg> */}
					</div>
					<img
						src={heroImage}
						className="h-full w-full object-cover"
					/>
				</div>
			</div>
			<ScrollWheel />
		</div>
	);
};

export default HeroSection;
