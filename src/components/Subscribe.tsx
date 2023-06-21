const Subscribe = () => {
	return (
		<div className="flex max-w-[330px] flex-col space-y-2">
			<label
				htmlFor="email"
				className="self-center sm:text-lg"
			>
				Get notified when we launch
			</label>
			<div className="flex overflow-hidden rounded-xl border border-[#828282] active:outline-none">
				<input
					className="w-full px-3 placeholder:text-[#828282]"
					placeholder="Email"
					id="email"
					type="text"
				/>
				<button className="bg-[#790096] px-4 py-3 font-poppins text-sm text-white sm:font-bold">Subscribe</button>
			</div>
		</div>
	);
};

export default Subscribe;
