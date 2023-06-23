import Layout from "../components/Layout";
// import logo from "@icons/logowithname.svg";
import rocket from "@icons/rocket.svg";
import Subscribe from "../components/Subscribe";
import media from "@icons/socialMedia.svg";
import { motion } from "framer-motion";

const ComingSoon = () => {
	return (
		<Layout>
			<div className="relative mt-16 flex h-[80vh] items-center justify-center space-x-[50px] bg-confetti bg-contain bg-center bg-repeat px-7 md:h-[65vh] lg:mt-[120px] lg:px-[130px] xl:mt-[80px]">
				<div className="flex w-full flex-col items-center justify-center bg-white lg:w-[60%] lg:items-start lg:p-5 lg:pt-8">
					<h2 className="mb-2 text-center text-[35px] font-semibold leading-snug tracking-wide sm:text-[40px] lg:text-start lg:leading-[59.04px]">WE ARE COMING SOON!!</h2>
					<p className="text-center text-xl text-[#828282] lg:text-start">
						Stay tuned for something <br className="hidden lg:block" /> amazing
					</p>
					<div className="mt-5 self-center lg:mt-12 lg:self-start">
						<Subscribe />
					</div>
				</div>
				<motion.div className="hidden max-h-[330px] max-w-[320px] flex-1 animate-bounce-slow lg:flex">
					<img
						src={rocket}
						className="h-full w-full object-cover"
					/>
				</motion.div>
			</div>
			<div className="mb-3 mt-2 hidden justify-center lg:flex">
				<img src={media} />
			</div>
		</Layout>
	);
};

export default ComingSoon;
