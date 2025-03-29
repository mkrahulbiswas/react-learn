import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

import { VariousPackagesUse } from "./component/VariousPackagesUse/VariousPackagesUse.tsx";
import { TestAndImplement } from "./component/TestAndImplement/TestAndImplement.tsx";
import { VariousPackagesUseWorking } from "./component/VariousPackagesUseWorking/VariousPackagesUseWorking.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <VariousPackagesUseWorking />
    {/* <VariousPackagesUse /> */}
    {/* <ReactLearnOneApp /> */}
    {/* <ReactLearnTwoApp /> */}
    {/* <TestAndImplement /> */}
  </StrictMode>
);
