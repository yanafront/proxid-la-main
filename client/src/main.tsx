import { createRoot } from "react-dom/client";
import App from "./App";
import FloatingNav from "./components/floating-nav";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <>
    <FloatingNav />
    <App />
  </>
);
