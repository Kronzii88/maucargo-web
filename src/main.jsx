import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// eslint-disable-next-line react-refresh/only-export-components
const Root = () => {
  useEffect(() => {
    if (window.kursor) {
      new window.kursor({
        type: 1,
        color: "#FFA500",
      });
    }
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
