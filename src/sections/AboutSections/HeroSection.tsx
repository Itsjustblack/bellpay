import leftConfetti from "@images/leftConfetti.png";
import rightConfetti from "@images/rightConfetti.png";
import LazyLoadImage from "../../components/LazyLoadImage";

const HeroSection = () => {
	return (
		<header className="flex flex-col justify-between px-[35px] py-[50px] sm:px-[70px] lg:px-[180px] lg:py-[100px]">
			<LazyLoadImage
				src={leftConfetti}
				className="absolute left-0 top-[22px] w-[69px] object-cover sm:w-[90px] lg:w-[151px]"
			/>
			<div
				style={{ zIndex: 10 }}
				className="w-full sm:px-5 lg:px-0"
			>
				<h2 className="mb-12 text-center text-[28px] font-semibold leading-[40px] text-[#3F0344] sm:text-[40px] sm:leading-[50px] md:text-[50px] lg:mb-6 lg:text-[61px] lg:leading-[80px]">Our mission is To make payments easy and seamless for everyone, anywhere, and anytime.</h2>
				<p className="hidden text-center text-[20px] leading-[30px] text-[#353535] lg:block">
					BellPay is a payment solutions company that provides secure and reliable payment services to individuals and businesses in Nigeria and beyond. Our mission is To make payments easy and seamless for everyone, anywhere, and anytime. We use state-of-the-art security measures to protect our customers data and transactions, and we work closely with our partners to ensure that our payment
					solutions are secure and reliable.
				</p>
				<div className="flex flex-col space-y-[38px] text-center text-base leading-[19.95px] text-[#353535] lg:hidden">
					<p>BellPay is a payment solutions company that provides secure and reliable payment services to individuals and businesses in Nigeria and beyond.</p>
					<p>Our mission is To make payments easy and seamless for everyone, anywhere, and anytime. </p>
					<p>{`We use state-of-the-art security measures to protect our customers' data and transactions, and we work closely with our partners to ensure that our payment solutions are secure and reliable.`}</p>
				</div>
			</div>
			<LazyLoadImage
				src={rightConfetti}
				className="absolute -top-2 right-0 w-[69px] object-cover sm:w-[90px] lg:w-[151px]"
			/>
		</header>
	);
};

export default HeroSection;
