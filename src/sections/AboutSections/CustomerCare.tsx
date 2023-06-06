import customerCare2 from "@images/customerCare2.png";

const CustomerCare = () => {
	return (
		<>
			{/* Desktop Version */}
			<section className="hidden w-full items-center justify-center space-x-[75px] bg-[#7900961A] p-20 lg:flex">
				<div className="flex flex-1 overflow-hidden rounded-lg">
					<img
						className="h-auto w-full object-cover"
						src={customerCare2}
						alt=""
					/>
				</div>
				<div className="flex max-w-[50%] flex-col space-y-[30px]">
					<h2 className="text-[2.5rem] font-semibold text-[#0C1825]">Customer care</h2>
					<p className="text-[24px] leading-[31.92px]">At BellPay, we place a high premium on customer satisfaction. We understand that our success depends on the success of our customers, and we are committed to helping our customers achieve their payment goals. </p>
				</div>
			</section>

			{/* Mobile Version */}
			<section className="flex w-full flex-col items-center space-y-[100px] pb-[50px] sm:space-y-[70px] lg:hidden">
				<div className="w-full bg-[#7900961A] px-[35px] py-10 sm:px-[70px]">
					<h2 className="mb-2 text-[30px] font-semibold text-[#0C1825] sm:mb-5 sm:text-[35px] lg:text-[2.5rem]">Customer care</h2>
					<p className="text-base leading-[26.6px] sm:text-[20px]">At BellPay, we place a high premium on customer satisfaction. We understand that our success depends on the success of our customers, and we are committed to helping our customers achieve their payment goals. </p>
				</div>
				<div className="flex flex-1 overflow-hidden px-[28px] sm:px-[60px]">
					<img
						className="h-auto w-full object-cover"
						src={customerCare2}
						alt=""
					/>
				</div>
			</section>
		</>
	);
};

export default CustomerCare;
