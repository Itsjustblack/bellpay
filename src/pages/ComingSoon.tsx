import Layout from "../components/Layout";
import twitter from "@icons/twitterBlack.svg";
import youtube from "@icons/youtubeBlack.svg";
import facebook from "@icons/facebookBlack.svg";
import instagram from "@icons/instagramBlack.svg";
import rocket from "@icons/rocket.svg";
import Subscribe from "../components/Subscribe";
import { motion } from "framer-motion";
import LazyLoadImage from "../components/LazyLoadImage";

const ComingSoon = () => {
	return (
		<Layout>
			<div className="relative mt-16 flex h-[80vh] items-center justify-center space-x-[50px] bg-confetti bg-contain bg-center bg-repeat px-7 md:h-[65vh] lg:mt-[120px] lg:px-[130px] xl:mt-[80px]">
				<div className="flex w-full flex-col items-center justify-center bg-white lg:w-[60%] lg:items-start lg:p-5 lg:pt-8">
					<h2 className=" text-center text-[35px] font-semibold leading-snug tracking-wide sm:text-[40px] lg:text-start lg:leading-[59.04px]">WE ARE COMING SOON!!</h2>
					<p className="text-center text-xl text-[#828282] lg:text-start">
						Stay tuned for something <br className="hidden lg:block xl:hidden" /> amazing
					</p>
					<div className="mt-3 w-full max-w-[400px] self-center lg:max-w-[350px] lg:self-start">
						<Subscribe />
					</div>
				</div>
				<motion.div className="hidden max-h-[330px] max-w-[320px] flex-1 animate-bounce-slow lg:flex">
					<LazyLoadImage
						src={rocket}
						className="h-full w-full object-cover"
					/>
				</motion.div>
			</div>
			<div className="my-3 flex w-full items-center justify-center">
				<div className="flex max-w-[264px] justify-around space-x-6">
					<a
						href="https://twitter.com/getbellpay"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={twitter}
							className="h-[24px] w-[24px] cursor-pointer sm:h-[30px] sm:w-[30px] lg:h-[32px] lg:w-[32px]"
						/>
					</a>
					<a
						href="https://facebook.com/getbellpay"
						target="_blank"
						rel="noreferrer"
					>
						<img
							src={facebook}
							className="h-[24px] w-[24px] cursor-pointer sm:h-[30px] sm:w-[30px] lg:h-[32px] lg:w-[32px]"
						/>
					</a>
					<a
						href="https://instagram.com/getbellpay"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={instagram}
							className="h-[24px] w-[24px] cursor-pointer sm:h-[30px] sm:w-[30px] lg:h-[32px] lg:w-[32px]"
						/>
					</a>
					<a
						href="https://www.youtube.com/channel/UCR5liESIcNflOZSGx0aX2dw"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src={youtube}
							className="h-[24px] w-[24px] cursor-pointer sm:h-[30px] sm:w-[30px] lg:h-[32px] lg:w-[32px]"
						/>
					</a>
				</div>
			</div>
		</Layout>
	);
};

export default ComingSoon;
