import Home from "@pages/Home";
import About from "@pages/About";
import FAQ from "@pages/FAQ";
import Video from "./components/Video";
import NotFoundPage from "@pages/NotFoundPage";
import ComingSoon from "@pages/ComingSoon";
import { VideoContextState, videoContext } from "./context/VideoContext";
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";
import NavWrapper from "./components/Nav/NavWrapper";
import { Route, Routes } from "react-router";

function App() {
	const { active } = useContext<VideoContextState>(videoContext);
	return (
		<div className={`${active && "h-[100vh] overflow-hidden"}`}>
			<Video />
			<NavWrapper>
				<AnimatePresence>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/about"
							element={<About />}
						/>
						<Route
							path="/faq"
							element={<FAQ />}
						/>
						{/* Havent Made Responsive */}
						<Route
							path="/comingsoon"
							element={<ComingSoon />}
						/>
						<Route
							path="*"
							element={<NotFoundPage />}
						/>
					</Routes>
				</AnimatePresence>
			</NavWrapper>
		</div>
	);
}

export default App;
