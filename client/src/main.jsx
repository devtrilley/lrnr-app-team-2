import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";

// Importing Materialize CSS and JS
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Router wraps app and handles the routing. Check URL/path for changes */}
    <Router>
      <App />
    </Router>
  </StrictMode>
);
