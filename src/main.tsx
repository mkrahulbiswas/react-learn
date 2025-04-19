
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { VariousPackagesUse } from "./component/VariousPackagesUse/VariousPackagesUse.tsx";
import { TestAndImplement } from "./component/TestAndImplement/TestAndImplement.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <VariousPackagesUse /> */}
    {/* <ReactLearnOneApp /> */}
    {/* <ReactLearnTwoApp /> */}
    <TestAndImplement />
  </StrictMode>
);
