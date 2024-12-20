import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import VideoProvider from "./context/VideoContext.jsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<VideoProvider>
				<App />
			</VideoProvider>
		</BrowserRouter>
	</React.StrictMode>
);
