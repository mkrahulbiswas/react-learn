import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'react-toastify/dist/ReactToastify.css';
import TestAndImplement from './component/TestAndImplement/TestAndImplement.tsx';
import { VariousPackagesUse } from './component/VariousPackagesUse/VariousPackagesUse.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <VariousPackagesUse />
    {/* <ReactLearnOneApp /> */}
    {/* <ReactLearnTwoApp /> */}
    {/* <TestAndImplement /> */}
  </StrictMode>
)