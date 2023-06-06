import HeroSection from "@sections/HomeSections/HeroSection";
import Products from "@sections/HomeSections/Products";
import WhyChooseBellPay from "@sections/HomeSections/WhyChooseBellPay";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div className="flex flex-col items-center px-[70px] pt-[50px]">
			<HeroSection />
			<WhyChooseBellPay />
			<Products />
			<Footer />
		</div>
	);
};

export default Home;
