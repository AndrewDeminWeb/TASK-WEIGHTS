import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ContextApp } from "./context/contextApp.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ContextApp>
			<App />
		</ContextApp>
	</React.StrictMode>
);
