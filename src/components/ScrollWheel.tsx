import MasterCard from "@icons/mastercardLogo.svg";
import Paypal from "@icons/paypalLogo.svg";
import Verve from "@icons/verveLogo.svg";
import Visa from "@icons/visaLogo.svg";

import { FC } from "react";

const images = [Visa, MasterCard, Paypal, Verve];

const ScrollWheel: FC = () => {
	return (
		<div className="w-full overflow-hidden bg-[#790096] px-[35px] py-3">
			<div
				style={{ zIndex: 20 }}
				className="carousel relative flex h-[81px] w-full items-center space-x-[80px]"
			>
				{images.map((image) => (
					<img
						key={image}
						className="h-[40px]"
						src={image}
						alt=""
					/>
				))}
				{images.map((image) => (
					<img
						key={image}
						className="h-[40px]"
						src={image}
						alt=""
					/>
				))}
			</div>
		</div>
	);
};

export default ScrollWheel;
