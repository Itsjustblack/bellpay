import React from "react";

const WhyChooseBellPay: React.FC = () => {
	const content: { title: string; body: string; icon: string }[] = [
		{ title: "Security", body: "Our platform is equipped with the latest security features and protocols, ensuring that your transactions  are safe and secure.", icon: "secure" },
		{ title: "Convenience", body: "Our payment solutions are designed to be easy to use, making it simple for businesses and individuals to send and receive payments.", icon: "check" },
		{ title: "Reliability", body: "We provide fast and reliable payment processing, ensuring that your transactions are processed quickly and efficiently", icon: "reliable" },
		{ title: "Innovation", body: " We are constantly innovating to provide new and better payment solutions to meet the evolving needs of our customers", icon: "idea" },
	];

	return (
		<section className="px-[32px] py-[100px] md:px-[60px] lg:px-[70px]">
			<h2 className="mb-4 text-center text-[32px] font-semibold leading-[45px] text-[#000000D9]">BellPay provides the best value for you</h2>
			<p className="text-center text-[20px] font-semibold leading-[26.6px] text-[#353535]">Our mission is To make payments easy and seamless for everyone, anywhere, and anytime.</p>
			{/* Use Clamp Function for the body Text line-clamp-5 transition-all duration-[0.6s] hover:-translate-y-2 hover:scale-105 hover:shadow-lg*/}
			<div className="mt-10 grid grid-cols-1 items-center justify-center gap-x-10 gap-y-[50px] sm:grid-cols-2 sm:space-y-0 md:mt-20 xl:flex xl:space-x-5">
				{content.map((item) => (
					<div
						key={content.indexOf(item)}
						className="duraton-[0.7s] max-h-[300px] w-full max-w-[300px] justify-self-center rounded-3xl px-10 py-6 shadow-lg transition-transform lg:shadow-md lg:hover:scale-110 lg:hover:shadow-lg"
					>
						<h2 className="mb-2 text-center text-[23px] font-semibold text-black">{item?.title}</h2>
						<p className="break-words text-center text-base text-[#00000099]">{item?.body}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default WhyChooseBellPay;

// <div
// 	key={content.indexOf(item)}
// 	className="grid items-center lg:px-10 xl:px-12"
// >
// 	<div className="mb-4 flex h-[61px] w-[61px] items-center justify-center rounded-full bg-[#A936B3] p-2">
// 		<img
// 			className="h-[45px] w-[45px] object-contain"
// 			src={`/src/assets/icons/${item?.icon}.svg`}
// 			alt=""
// 		/>
// 	</div>
// 	<h2 className="mb-2 text-[20px] font-medium text-white">{item?.title}</h2>
// 	<p className="break-words pb-10 text-left text-sm leading-4 tracking-wide text-white lg:pb-0 lg:text-base">{item?.body}</p>
// 	<hr className="block w-[70%] justify-self-center lg:hidden" />
// </div>;
