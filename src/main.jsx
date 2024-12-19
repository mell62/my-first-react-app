import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { FavoriteFood } from "./Food.jsx";
import Greeting from "./Greeting.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <FavoriteFood />
  </StrictMode>
);
