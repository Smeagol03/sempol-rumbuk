import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Produk from "./Produk.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="font-utama">
      <App />
      <Produk />
      <Footer />
    </div>
  </StrictMode>
);
