import HeroSection from "@sections/HomeSections/HeroSection";
import Products from "@sections/HomeSections/Products";
import WhyChooseBellPay from "@sections/HomeSections/WhyChooseBellPay";
import Footer from "../components/Footer";
import PaymentSection from "@sections/HomeSections/PaymentSection";
import GetStarted from "../components/GetStarted";

const Home = () => {
	return (
		<div className="mx-auto overflow-y-scroll">
			<HeroSection />
			<Products />
			<PaymentSection />
			<WhyChooseBellPay />
			<GetStarted />
			<Footer />
		</div>
	);
};

export default Home;
