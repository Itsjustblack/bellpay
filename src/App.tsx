import NavWrapper from "./components/Nav/NavWrapper";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "@pages/FAQ";

function App() {
	return (
		<div>
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

export default App;
