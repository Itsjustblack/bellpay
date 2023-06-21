import HeroSection from "@sections/HomeSections/HeroSection";
import Products from "@sections/HomeSections/Products";
import WhyChooseBellPay from "@sections/HomeSections/WhyChooseBellPay";
import Footer from "../components/Footer";
import PaymentSection from "@sections/HomeSections/PaymentSection";
import GetStarted from "../components/GetStarted";
import Pricing from "@sections/HomeSections/Pricing";
import Layout from "../components/Layout";

const Home = () => {
	{
		/* Sign up button should link to the Coming Soon Page */
	}
	return (
		<Layout>
			<HeroSection />
			<Products />
			<PaymentSection />
			<Pricing />
			<WhyChooseBellPay />
			<GetStarted />
			<Footer />
		</Layout>
	);
};

export default Home;
