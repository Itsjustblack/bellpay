import { useNavigate } from "react-router";

const GetStarted = () => {
	const navigate = useNavigate();
	return (
		<section className="max-h-[408px] w-full bg-heroImage bg-cover bg-center bg-no-repeat py-20 lg:mb-20 lg:max-h-[454px] xl:mb-28">
			<div className="mx-auto flex flex-col items-center justify-center space-y-8 px-5 lg:space-y-[37px]">
				<h2 className="text-center text-[30px] font-medium leading-[50px] text-white sm:text-[38px] sm:leading-[60px] lg:text-[42px]">
					What are you waiting for? <br /> Sign up now and get started!
				</h2>
				<button
					onClick={() => navigate("/comingsoon")}
					className="rounded-xl bg-white px-8 py-3 text-[20px] font-semibold text-black transition-all duration-[0.7s] lg:scale-75 lg:rounded-3xl lg:px-20 lg:py-6 lg:text-[32px] lg:hover:scale-100"
				>
					Get Started
				</button>
			</div>
		</section>
	);
};

export default GetStarted;
