import Visa from "@icons/visaLogo.svg";
import MasterCard from "@icons/mastercardLogo.svg";
import Paypal from "@icons/paypalLogo.svg";
import Verve from "@icons/verveLogo.svg";

const ScrollWheel = () => {
	return (
		<div
			style={{ zIndex: 20 }}
			className="relative bottom-0 grid h-[81px] w-full grid-cols-4 items-center space-x-5 bg-[#790096] px-[35px] py-6"
		>
			<div className="flex max-h-[40px] flex-1">
				<img
					className="h-auto w-full object-contain"
					src={Visa}
					alt=""
				/>
			</div>
			<div className="flex max-h-[40px] flex-1">
				<img
					className="h-auto w-full object-contain"
					src={MasterCard}
					alt=""
				/>
			</div>
			<div className="flex max-h-[40px] flex-1">
				<img
					className="h-auto w-full object-contain"
					src={Paypal}
					alt=""
				/>
			</div>
			<div className="flex max-h-[40px] flex-1">
				<img
					className="h-auto w-full object-contain"
					src={Verve}
					alt=""
				/>
			</div>
		</div>
	);
};

export default ScrollWheel;
