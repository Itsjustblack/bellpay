import QAImage from "@images/faqImage.png";
import downArrow from "@icons/downArrow.svg";
import React, { useState } from "react";
import { Questions, QuestionProps } from "./../data";
import Footer from "../components/Footer";

export const Question: React.FC<QuestionProps> = ({ id, title, answer }) => {
	{
		/* Find a Font thats Readable and Legible */
	}
	const [active, setActive] = useState<boolean>(false);
	return (
		<div
			key={id}
			onClick={() => setActive((prev) => !prev)}
			className="flex cursor-pointer flex-col items-center rounded-3xl bg-[#7800960e] px-5 py-6 sm:px-9 sm:py-10"
		>
			<div className="relative flex w-full items-center justify-between space-x-5">
				{/* <span className="text-lg font-medium sm:text-2xl lg:text-[50px]">{`${id}.`}</span> */}
				<h2 className="text-base font-semibold tracking-wide sm:text-xl lg:text-2xl">{title}</h2>
				<div className="flex items-center rounded-2xl bg-white px-2 py-2">
					<span className="ml-1 mr-6 block text-sm sm:text-base md:mr-10 md:text-lg">{active ? "Open" : "Close"}</span>
					<img
						className={`absolute right-3 h-[12px] w-[12px] md:h-5 md:w-5 ${active && "rotate-180"}`}
						src={downArrow}
						alt=""
					/>
				</div>
			</div>
			<p className={`mt-4 text-sm text-[#000000d9] sm:text-base lg:text-lg ${active ? "block" : "hidden"} break-words`}>{answer}</p>
		</div>
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
				<div className="mb-20 flex flex-col space-y-10">
					{/* [&>div:last-child]:border-none [&>div]:border-b [&>div]:border-black */}
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
