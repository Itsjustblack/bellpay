import productImage3 from "@images/productImage3.png";
import LazyLoadImage from "../../components/LazyLoadImage";

const Pricing = () => {
	return (
		<div className="mx-[32px] mt-[100px] flex min-h-[300px] items-center justify-between rounded-[30px] bg-[#000000] px-16 py-12 text-center text-white md:mx-[60px] md:space-x-12 md:py-8 md:text-start lg:mx-[70px] lg:px-12">
			<div className="flex max-h-[500px] max-w-[400px] flex-grow xl:max-h-[600px] xl:max-w-[541px]">
				<LazyLoadImage
					src={productImage3}
					className="hidden object-cover md:block"
				/>
			</div>
			<div className="flex w-full flex-col justify-center md:w-[60%] lg:items-start">
				<h2 className="text-xl font-semibold sm:text-[32px] md:leading-[40px] xl:text-[40px]">Our Prices are Competitive offer you the best option that helps your business stay on top</h2>
				<button className="mt-6 w-full max-w-[247px] self-center rounded-lg bg-white py-[10px] text-lg font-medium tracking-wide text-black">Learn more</button>
			</div>
		</div>
	);
};

export default Pricing;
