import Layout from "../components/Layout";
import cards from "@images/productCards.png";
import piggyBank from "@images/piggyBank.png";
import bitcoin from "@images/bitcoin.png";
import coins from "@images/coins.png";
import connect from "@images/connect.png";
import deposit from "@images/safeDeposit.png";
import LazyLoadImage from "../components/LazyLoadImage";
import Footer from "../components/Footer";
import heroBg from "@icons/productsHeroBg.svg";
import GetStarted from "../components/GetStarted";

interface ProductProps {
	src: string;
	title: string;
	body: string;
}

// eslint-disable-next-line react/prop-types
const Product: React.FC<ProductProps> = ({ src, title, body }) => {
	return (
		<div className="flex w-full flex-col">
			<div className="flex min-w-[250px] max-w-[750px] flex-1 self-center">
				<div className="overflow-hidden rounded-xl">
					<LazyLoadImage
						src={src}
						className="h-full w-full object-cover md:h-[300px] md:w-[600px] xl:h-[383px] xl:w-[750px]"
					/>
				</div>
			</div>
			<div className="mt-8">
				<h2 className="text-xl font-semibold sm:text-[30px] lg:text-[42px]">{title}</h2>
				<p className="mt-2 text-sm sm:text-base lg:mt-4 xl:text-lg">{body}</p>
			</div>
		</div>
	);
};

const Products = () => {
	return (
		<Layout>
			<section className="overflow-hidden px-[35px] sm:px-[80px] lg:px-[130px]">
				<header className="relative mt-6 flex h-[300px] w-full items-center justify-center sm:mt-12 sm:h-[550px]">
					<LazyLoadImage
						src={heroBg}
						className="absolute h-full w-full object-contain"
					/>
					<div className="flex flex-col items-center justify-center pt-4">
						<span className="text-[28px] font-semibold sm:text-[60px] md:text-[80px]">Our</span>
						<span className="text-[28px] font-semibold text-[#4E0754] sm:text-[60px] md:text-[80px]">Products</span>
						<p className="mt-2 w-[60%] text-center text-sm sm:text-lg">Experience the ease, dependability, and security of our payment solutions by signing up with us today.</p>
					</div>
				</header>
				<div className="my-20 flex flex-col justify-center space-y-[50px] lg:space-y-[80px]">
					<Product
						src={cards}
						title="Bell Shop"
						body="Bell Shop is our flagship product that offers payment solutions through different channels like virtual accounts, bank transfers, cards, and QR codes. With Bell Shop, businesses and individuals can enjoy secure and fast payment processing. We support local and international transactions, and our payment solutions are suitable for businesses of all sizes, from small startups to large corporations."
					/>
					<Product
						src={piggyBank}
						title="Bell Payment Links"
						body="Bell Payment Links offer a convenient payment solution for businesses and individuals who want to receive payments online. We generate custom payment links that can be sent to customers via email or SMS, allowing them to pay directly through the link. Our payment links are easy to use and secure, providing customers with a hassle-free payment experience."
					/>
					<Product
						src={bitcoin}
						title="Bell CheckOut"
						body="Bell CheckOut: Bell CheckOut is our payment solution for e-commerce businesses. We provide easy integration with popular e-commerce platforms, making it simple for businesses to accept online payments. Our payment gateway is secure and reliable, ensuring that customers can make purchases without any hassle. "
					/>
					<Product
						src={deposit}
						title="BellMi"
						body="BellMi is a payment solution that enables you to spend and pay on WhatsApp. With BellMi, you can easily send and receive money, pay bills, and make purchases using your WhatsApp account. We offer a seamless and secure payment experience, making financial transactions on WhatsApp easier than ever before."
					/>
					<Product
						src={connect}
						title="PayOuts"
						body="PayOuts is our payment solution for businesses that need to make bulk payments to vendors, suppliers, and employees. With PayOuts, you can easily make payments to multiple recipients at once, saving time and reducing administrative costs. Our payment solution is fast, reliable, and secure, ensuring that your payments are processed without any delays."
					/>
					<Product
						src={coins}
						title="Bills n Payment"
						body="Bills n Payment is our solution for paying bills online. We support payments for various utility bills such as electricity bills, water bills, and cable TV bills. Our payment solution is fast, reliable, and secure, ensuring that your bills are paid on time without any hassle."
					/>
				</div>
			</section>
			<GetStarted />
			<Footer />
		</Layout>
	);
};

export default Products;
