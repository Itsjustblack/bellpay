import { Dispatch, FC, SetStateAction, useState } from "react";
import { createContext } from "react";

export interface VideoContextState {
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
}

export const videoContext = createContext<VideoContextState>({ active: false, setActive: () => console.log("no Video provider") });

const VideoProvider: FC<any> = ({ children }) => {
	const [active, setActive] = useState(false);
	return <videoContext.Provider value={{ active, setActive }}>{children}</videoContext.Provider>;
};

export default VideoProvider;
