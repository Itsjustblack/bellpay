import { useState } from "react";

interface LazyLoadImageProps {
	// placeholderSrc: string;
	src: string;
	alt?: string;
	className?: string;
}

const LazyLoadImage = ({ src, alt, className }: LazyLoadImageProps) => {
	const [loading, setLoading] = useState(true);

	return (
		<img
			src={src}
			alt={alt || ""}
			className={`${className} ${loading ? "blur-[4px]" : "blur-none"} transition duration-[0.6s] ease-linear`}
			onLoad={() => setLoading(false)}
		/>
	);
};

export default LazyLoadImage;
