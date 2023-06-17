import NavWrapper from "./components/Nav/NavWrapper";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "@pages/FAQ";
import Video from "./components/Video";

function App() {
	const { active } = useContext<VideoContextState>(videoContext);
	return (
		<div className={`${active && "h-[100vh] overflow-hidden"}`}>
			<Video />
			<NavWrapper>
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
				</Routes>
			</NavWrapper>
		</div>
	);
}
import { VideoContextState, videoContext } from "./context/VideoContext";
import { useContext } from "react";

export default App;
