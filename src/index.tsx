import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PageVitrineDesktop } from "./page/PageVitrineDesktop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PageVitrineDesktop />
  </StrictMode>,
);
