import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/shared/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <p>Testing</p>
    </div>
  </StrictMode>,
);
