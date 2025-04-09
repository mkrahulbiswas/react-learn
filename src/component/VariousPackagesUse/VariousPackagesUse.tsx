import "./VariousPackagesUse.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import { CommonContextProvider } from "./Context/CommonContext";
import { RouteContextProvider } from "./Context/RouteContext";
import { Layout } from "./Layout/Layout";
import { ErrorPage } from "./Component/ErrorPage/ErrorPage";
import { Home } from "./Component/Home/Home";
import { getPackagesRouteLink } from "./Helpers/RouteHelper/PackagesRoute/PackagesRouteLink";

export const VariousPackagesUse = () => {
  const packagesRouteLink: any = getPackagesRouteLink({})
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          ...packagesRouteLink
        }
      ]
    }
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
