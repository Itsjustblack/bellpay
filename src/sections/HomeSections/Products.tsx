import productImage1 from "@images/productImage1.png";
import productImage2 from "@images/productImage2.png";
import productImage3 from "@images/productImage3.png";
import cards from "@images/cards.png";

type ProductFeatureProps = {
	index: number;
};

const ProductFeature = ({ index }: ProductFeatureProps) => {
	return (
		<div className="flex max-w-[604px] flex-col items-center justify-center space-y-2 rounded-[30px] bg-[#FDFAFC] px-10 py-10">
			<div className="flex max-h-[284px] max-w-[267px] flex-grow ">
				<img
					className="object-cover"
					src={index === 1 ? productImage3 : cards}
					alt=""
				/>
			</div>
			<h2 className="text-[30px] font-semibold xl:text-[40px]">Make bulk payments</h2>
			<p className="pb-6 text-center text-[#000000BF]">You can easily make payments to multiple recipients at once, saving time and reducing administrative costs.</p>
		</div>
	);
};

const Products = () => {
	return (
		<section className="my-20 flex flex-col space-y-[100px]">
			{/* Product 1 */}
			<div className="flex items-center justify-center space-x-6 rounded-[30px] bg-black px-12 py-4 text-white">
				<div className="flex flex-col space-y-5">
					<h2 className="text-[40px] font-semibold leading-[51.66px]">
						A Fully integrated Suit of <br className="hidden xl:block" /> Payment Products
					</h2>
					<p className="leading-2 text-base">
						With our innovative payment solutions, you can send <br /> and receive money, pay bills and make purchases effortlessly.
					</p>
					<button className="max-w-[247px] rounded-lg bg-white py-[10px] text-lg font-medium tracking-wide text-black">Learn more</button>
				</div>
				<div className="flex max-h-[500px] max-w-[400px] flex-grow xl:max-h-[600px] xl:max-w-[541px]">
					<img
						className="object-cover"
						src={productImage1}
						alt=""
					/>
				</div>
			</div>
			{/* Product 2 */}
			<div className="flex items-center justify-between space-x-6 rounded-[30px] bg-[#790096] px-12 py-4 text-white">
				<div className="flex max-h-[500px] max-w-[400px] flex-grow xl:max-h-[600px] xl:max-w-[541px]">
					<img
						className="object-cover"
						src={productImage2}
						alt=""
					/>
				</div>
				<div className="flex flex-col items-start justify-center">
					<h2 className="text-[30px] font-semibold leading-[51.66px] xl:text-[40px]">Accept payments online</h2>
					<p className="leading-2 mt-2 max-w-[500px] text-base xl:text-[18px] xl:leading-[34.58px]">We provide easy integration with popular e-commerce platforms, making it simple for businesses to accept online payments. Our payment gateway is secure and reliable, ensuring that customers can make purchases without any hassle</p>
					<button className="mt-5 w-full max-w-[247px] self-end rounded-lg bg-white py-[10px] text-lg font-medium tracking-wide text-black">Learn more</button>
				</div>
			</div>
			{/* Product 3 */}
			<div className="flex justify-between space-x-[51px]">
				<ProductFeature index={1} />
				<ProductFeature index={2} />
			</div>
		</section>
	);
};

export default Products;
