import teamImage from "@images/team2.png";
import LazyLoadImage from "../../components/LazyLoadImage";
const TeamSection = () => {
	return (
		<>
			{/* Desktop Version */}
			<section className="hidden w-full items-center justify-center space-x-[75px] bg-white p-20 lg:flex lg:first-letter:flex">
				<div className="flex max-w-[50%] flex-col space-y-[30px]">
					<h2 className="text-[2.5rem] font-semibold text-[#0C1825]">Our Team</h2>
					<p className="text-[24px] leading-[31.92px]">We are a team of experts in payment technology, finance, and customer service, dedicated to delivering innovative payment solutions that simplify payment processes, reduce transaction costs, and improve payment experiences for our customers.</p>
				</div>
				<div className="flex flex-1 overflow-hidden rounded-lg">
					<LazyLoadImage
						src={teamImage}
						className="h-auto w-full object-cover"
					/>
				</div>
			</section>
			{/* Mobile Version */}
			<section className="flex w-full flex-col items-center space-y-[100px] pb-20 pt-10 sm:space-y-[70px] lg:hidden">
				<div className="w-full px-[35px] sm:px-[70px]">
					<h2 className="mb-3 text-[2.5rem] font-semibold text-[#0C1825] sm:mb-5">Our Team</h2>
					<p className="text-base leading-[26.6px] sm:text-[20px]">We are a team of experts in payment technology, finance, and customer service, dedicated to delivering innovative payment solutions that simplify payment processes, reduce transaction costs, and improve payment experiences for our customers.</p>
				</div>
				<div className="flex flex-1 overflow-hidden rounded-lg px-[28px] sm:px-[60px]">
					<LazyLoadImage
						src={teamImage}
						className="h-auto w-full object-cover"
					/>
				</div>
			</section>
		</>
	);
};

export default TeamSection;
