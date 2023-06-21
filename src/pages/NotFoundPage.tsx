import { useNavigate } from "react-router-dom";
import returnArrow from "@icons/back.svg";
import Error from "@images/404Error.png";
import Layout from "../components/Layout";

const NotFoundPage = () => {
	const navigate = useNavigate();
	return (
		<Layout>
			<div className="py-auto mx-9 flex h-[80vh] flex-col items-center justify-center pt-8 lg:mx-[130px] lg:flex-row">
				{/* lg:pt-[140x] xl:pt-[140px] */}
				<div className="relative flex max-h-[200px] max-w-[350px] flex-1 lg:hidden">
					<img
						src={Error}
						className="h-full w-full object-cover"
					/>
				</div>
				<div className="flex max-w-[400px] flex-col items-center">
					<h1 className="text-[30px] font-semibold sm:text-[48px]">Page not found</h1>
					<p className="mb-5 text-center text-sm sm:text-base lg:text-lg">
						We are very sorry for inconvenience. <br />
						We cant find the page that you are looking for
					</p>
					<div
						onClick={() => navigate("/")}
						className="flex w-fit cursor-pointer space-x-4 rounded-xl border border-black px-5 py-2 sm:space-x-6"
					>
						<img src={returnArrow} />
						<p className="text-base font-medium md:text-xl">Go Home</p>
					</div>
				</div>
				<div className="relative hidden max-h-[450px] max-w-[500px] flex-1 lg:flex">
					<img
						src={Error}
						className="h-full w-full object-cover"
					/>
				</div>
			</div>
		</Layout>
	);
};

export default NotFoundPage;
