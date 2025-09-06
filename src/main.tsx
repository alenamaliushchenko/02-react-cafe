import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App"; 
import "modern-normalize/modern-normalize.css";



const root = ReactDOM.createRoot(
  document.getElementById("app") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
