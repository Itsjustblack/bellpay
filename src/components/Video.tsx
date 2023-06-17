import React from "react";
import heroVid from "./../../public/BellPay2.mp4";
import { VideoContextState, videoContext } from "../context/VideoContext";
import { useContext } from "react";
import close from "@icons/close.svg";

const Video: React.FC = () => {
	const { active, setActive } = useContext<VideoContextState>(videoContext);
	return active ? (
		<div className="fixed z-[1043] flex h-full w-full items-center justify-center overflow-hidden">
			<div
				onClick={() => setActive(false)}
				className="absolute h-full w-full bg-[#0b0b0b] bg-opacity-80"
			></div>
			<div className="relative flex w-full max-w-[900px] flex-col p-5">
				<img
					onClick={() => setActive(false)}
					src={close}
					className="relative left-0 mb-3 h-5 w-5 cursor-pointer self-end object-contain transition-transform duration-[0.7s] hover:scale-125"
				/>
				<video
					className="h-full w-full rounded focus:outline-none"
					src={heroVid}
					autoPlay
					controls
					autoFocus
				/>
			</div>
		</div>
	) : (
		<></>
	);
};

export default Video;
