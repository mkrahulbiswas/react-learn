import "./VariousPackagesUseWorking.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import { CommonContextProvider } from "./Context/CommonContext";
import { RouteContextProvider } from "./Context/RouteContext";
import { getRouteLink } from "./Helpers/RouteHelper";

export const VariousPackagesUseWorking = () => {
  const router = createBrowserRouter([
    getRouteLink({})
  ])
  return (
    <div className="vps">
      <CommonContextProvider>
        <RouteContextProvider>
          <RouterProvider router={router} />
        </RouteContextProvider>
      </CommonContextProvider>
    </div>
  );
};
