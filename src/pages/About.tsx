import Footer from "../components/Footer";
import HeroSection from "@sections/AboutSections/HeroSection";
import CustomerCare from "@sections/AboutSections/CustomerCare";
import TeamSection from "@sections/AboutSections/TeamSection";
import GetStarted from "../components/GetStarted";

const About = () => {
	return (
		<div className="relative">
			<HeroSection />
			<CustomerCare />
			<TeamSection />
			<GetStarted />
			<Footer />
		</div>
	);
};

export default About;

{
	/* <>
			<section className="flex max-h-[819px] items-center justify-center space-x-8 bg-black bg-heroImage bg-cover bg-center bg-no-repeat px-[70px] py-[80px] text-white">
				<div className="flex flex-col space-y-3">
					<h3 className="text-[30px] font-semibold">Our Mission</h3>
					<h2 className="textClamp max-w-[547px] font-semibold leading-[51.66px] xl:leading-[71.34px]">To make payments easy and seamless for everyone, anywhere, and anytime.</h2>
				</div>
				<div className="flex max-h-[500px] max-w-[400px] flex-grow xl:max-h-[600px] xl:max-w-[541px]">
					<img
						className="object-cover"
						src={heroImage}
						alt=""
					/>
				</div>
			</section>
			<section className="flex flex-col space-y-[120px] px-[70px] pb-[50px] pt-[80px]">
				<div className="flex justify-center space-x-[100px]">
					<div className="flex max-h-[560px] max-w-[400px] flex-grow xl:max-h-[600px] xl:max-w-[541px]">
						<img
							className="object-cover"
							src={aboutUs}
							alt=""
						/>
					</div>
					<div className="flex max-w-[450px] flex-col space-y-4">
						<h2 className="text-[40px] font-semibold">About Us</h2>
						<p className="text-base leading-[27.93px]">BellPay is a payment solutions company that provides secure and reliable payment services to individuals and businesses in Nigeria and beyond.</p>
						<p className="text-base leading-[27.93px]">We are a team of experts in payment technology, finance, and customer service, dedicated to delivering innovative payment solutions that simplify payment processes, reduce transaction costs, and improve payment experiences for our customers.</p>
					</div>
				</div>
				<div className="flex justify-between space-x-[50px]">
					<div className="mt-3 flex max-w-[450px] flex-col space-y-4">
						<h2 className="text-[40px] font-semibold">Our Team</h2>
						<p className="text-base leading-[27.93px]">Our team of experts is always available to provide support and guidance to our customers, ensuring that they get the most out of our payment solutions. We are also committed to maintaining the highest standards of security and reliability. </p>
						<p className="text-base leading-[27.93px]">We are a team of experts in payment technology, finance, and customer service, dedicated to delivering innovative payment solutions that simplify payment processes, reduce transaction costs, and improve payment experiences for our customers.</p>
					</div>
					<div className="flex max-h-[560px] max-w-[400px] flex-grow xl:max-h-[600px] xl:max-w-[541px]">
						<img
							className="object-cover"
							src={team}
							alt=""
						/>
					</div>
				</div>
				<div className="flex justify-between space-x-[50px]">
					<div className="flex max-h-[560px] max-w-[400px] flex-grow xl:max-h-[600px] xl:max-w-[541px]">
						<img
							className="object-cover"
							src={customerCare}
							alt=""
						/>
					</div>
					<div className="flex max-w-[450px] flex-col space-y-4">
						<h2 className="text-[40px] font-semibold">Customer care</h2>
						<p className="text-base leading-[27.93px]">At BellPay, we place a high premium on customer satisfaction. We understand that our success depends on the success of our customers, and we are committed to helping our customers achieve their payment goals. </p>
						<p className="text-base leading-[27.93px]">{`We use state-of-the-art security measures to protect our customers' data and transactions, and we work closely with our partners to ensure that our payment solutions are secure and reliable.`}</p>
					</div>
				</div>
			</section>
			<Footer />
		</> */
}
