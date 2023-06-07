import cards from "@images/cards.png";

const PaymentSection = () => {
	return (
		<section className="flex items-center justify-center bg-[#7900961A] bg-rough bg-cover bg-center bg-no-repeat px-[32px] py-[100px] md:space-x-[50px] md:px-[70px]">
			<div className="hidden max-w-[400px] flex-1 md:flex">
				<img
					className="h-auto w-full object-cover"
					src={cards}
					alt=""
				/>
			</div>
			<div className="w-full md:max-w-[65%]">
				<h2 className="mb-3 text-[38px] font-semibold leading-[50px] text-[#212529] lg:text-[42px]">Receive payments internationally</h2>
				<p className="text-lg leading-7 lg:text-xl">We support local and international transactions, and our payment solutions are suitable for businesses of all sizes, from small startups to large corporations.</p>
			</div>
		</section>
	);
};

export default PaymentSection;
