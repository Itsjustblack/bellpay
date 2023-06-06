import QAImage from "@images/faqImage.png";
import downArrow from "@icons/downArrow.svg";
import React, { useState } from "react";
import { Questions, QuestionProps } from "./../data";
import Footer from "../components/Footer";

export const Question: React.FC<QuestionProps> = ({ id, title, answer }) => {
	const [active, setActive] = useState<boolean>(false);
	return (
		<>
			{/* Desktop Version */}
			<div
				onClick={() => setActive((prev) => !prev)}
				className="relative hidden cursor-pointer items-center justify-between border-b-2 border-black bg-white py-12 pl-12 pr-[85px] lg:flex"
			>
				<div className="flex items-center justify-between space-x-[40px]">
					<span className="text-2xl font-medium lg:text-[64px]">{`${id}.`}</span>
					<div className="flex flex-col space-y-[20px]">
						<h2 className="text-base font-semibold tracking-wide lg:text-3xl lg:leading-[100px]">{title}</h2>
						<p className={`text-base text-[#00000099] lg:text-lg ${active ? "block" : "hidden"} break-words`}>{answer}</p>
					</div>
				</div>
				<img
					className={`absolute right-[40px] h-[24px] w-[24px] lg:h-[50px] lg:w-[30px] ${active && "rotate-180"}`}
					src={downArrow}
					alt=""
				/>
			</div>

			{/* Mobile Version */}
			<div
				onClick={() => setActive((prev) => !prev)}
				className="flex cursor-pointer flex-col items-center bg-white px-5 py-6 sm:py-10 lg:hidden"
			>
				<div className="relative flex w-full items-center justify-between space-x-4">
					<span className="text-lg font-medium sm:text-2xl lg:text-[64px]">{`${id}.`}</span>
					<h2 className="text-sm font-semibold tracking-wide sm:text-xl lg:text-3xl">{title}</h2>
					<img
						className={`relative right-0 h-[20px] w-[20px] sm:h-[24px] sm:w-[24px] ${active && "rotate-180"}`}
						src={downArrow}
						alt=""
					/>
				</div>
				<p className={`mt-4 text-sm text-[#00000099] sm:text-base lg:block lg:text-lg ${active ? "block" : "hidden"} break-words`}>{answer}</p>
			</div>
		</>
	);
};

const FAQ = () => {
	return (
		<>
			<div className="w-full bg-[#FDF6FF] px-9 py-16 sm:px-10 lg:px-[70px]">
				<header className="mb-8 flex items-center justify-center space-x-[80px] text-[#4E0754] xl:space-x-[170px]">
					<div className="text-center">
						<h1 className="mb-4 text-[30px] font-bold leading-[36px] sm:text-[36px] sm:leading-[48px] lg:text-[60px] lg:leading-[50px]">
							Frequently Asked <br /> Questions
						</h1>
						<p className="text-lg lg:text-xl">Here are some common questions about BellPay.</p>
					</div>
					<img
						className="hidden lg:block"
						src={QAImage}
						alt=""
					/>
				</header>
				<div className="mb-20 flex flex-col border-none [&>div:last-child]:border-none [&>div]:border-b [&>div]:border-black">
					{Questions.map(({ id, title, answer }) => (
						<Question
							key={id}
							id={id}
							title={title}
							answer={answer}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default FAQ;
