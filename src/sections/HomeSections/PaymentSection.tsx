import cards from "@images/cards.png";
import LazyLoadImage from "../../components/LazyLoadImage";
import rough from "@images/roughBg.png";

const PaymentSection = () => {
	return (
		<section className="relative flex w-full items-center justify-center  bg-[#7900961A] px-[32px] py-[100px] md:space-x-[50px] md:px-[70px]">
			<LazyLoadImage
				src={rough}
				className="absolute h-full w-full object-cover opacity-60"
			/>
			<div className="hidden max-w-[400px] flex-1 md:flex">
				<LazyLoadImage
					src={cards}
					className="h-auto w-full object-cover"
				/>
			</div>
			<div className="w-full md:max-w-[65%]">
				<h2 className="mb-3 text-[38px] font-semibold leading-[50px] lg:text-[42px]">Receive payments internationally</h2>
				<p className="text-lg leading-7 lg:text-xl">We support local and international transactions, and our payment solutions are suitable for businesses of all sizes, from small startups to large corporations.</p>
			</div>
		</section>
	);
};

export default PaymentSection;
