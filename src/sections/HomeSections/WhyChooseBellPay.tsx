import React from "react";

const WhyChooseBellPay: React.FC = () => {
	const content: { title: string; body: string; icon: string }[] = [
		{ title: "Security", body: "Our platform is equipped with the latest security features and protocols, ensuring that your transactions  are safe and secure.", icon: "secure" },
		{ title: "Convenience", body: "Our payment solutions are designed to be easy to use, making it simple for businesses and individuals to send and receive payments.", icon: "check" },
		{ title: "Reliability", body: "We provide fast and reliable payment processing, ensuring that your transactions are processed quickly and efficiently", icon: "reliable" },
		{ title: "Innovation", body: " We are constantly innovating to provide new and better payment solutions to meet the evolving needs of our customers", icon: "idea" },
	];

	return (
		<section className="my-20 flex justify-between space-x-[30px]">
			{/* Use Clamp Function for the body Text line-clamp-5 transition-all duration-[0.6s] hover:-translate-y-2 hover:scale-105 hover:shadow-lg*/}
			{content.map((item) => (
				<div
					key={content.indexOf(item)}
					className="w-full rounded-2xl p-6 shadow-lg"
				>
					<h2 className="mb-2 text-center text-[20px] font-semibold text-black">{item?.title}</h2>
					<p className="break-words text-center text-base text-black">{item?.body}</p>
				</div>
			))}
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
