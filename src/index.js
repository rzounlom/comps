import "./index.css";

import App from "./App";
import { NavigationProvider } from "./context/navigation";
import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>
);
