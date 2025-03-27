import "./VariousPackagesUseWorking.scss";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./Layout/Layout";
import { ErrorPage } from "./Component/ErrorPage/ErrorPage";
import { Home } from "./Component/Home/Home";
import { PackagesContextProvider } from "./Context/PackagesContext";
import { CommonContextProvider } from "./Context/CommonContext";
import { RouteContextProvider } from "./Context/RouteContext";
import { getRouteData } from "./Database/RouteDatabase";
import { useHelper } from "./hooks/useHelper";

export const VariousPackagesUseWorking = () => {
  const routePaths = getRouteData({})
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
          path: useHelper({
            type: 'routeConcatenate', data: [
              routePaths.packages.route
            ]
          }),
          element: <PackagesContextProvider>
            {routePaths.packages.component}
          </PackagesContextProvider>,
          children: [
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.uiComponentPackage.route,
                ]
              }),
              element: <>{routePaths.packages.nested.uiComponentPackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.uiComponentPackage.route,
                      routePaths.packages.nested.uiComponentPackage.nested.blueprintJsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.uiComponentPackage.nested.blueprintJsType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.uiComponentPackage.route,
                      routePaths.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.uiComponentPackage.route,
                      routePaths.packages.nested.uiComponentPackage.nested.chakraUiType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.uiComponentPackage.nested.chakraUiType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.uiComponentPackage.route,
                      routePaths.packages.nested.uiComponentPackage.nested.fluentUiType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.uiComponentPackage.nested.fluentUiType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.uiComponentPackage.route,
                      routePaths.packages.nested.uiComponentPackage.nested.semanticUiReactType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.uiComponentPackage.nested.semanticUiReactType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.uiComponentPackage.route,
                      routePaths.packages.nested.uiComponentPackage.nested.antDesignType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.uiComponentPackage.nested.antDesignType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.uiComponentPackage.route,
                      routePaths.packages.nested.uiComponentPackage.nested.materialUiType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.uiComponentPackage.nested.materialUiType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.uiComponentPackage.route,
                      routePaths.packages.nested.uiComponentPackage.nested.primereactType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.uiComponentPackage.nested.primereactType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.uiComponentPackage.route,
                      routePaths.packages.nested.uiComponentPackage.nested.uiBootstrap.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.uiComponentPackage.nested.uiBootstrap.component}</>,
                },
              ]
            },
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.chartPackage.route,
                ]
              }),
              element: <>{routePaths.packages.nested.chartPackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.chartPackage.route,
                      routePaths.packages.nested.chartPackage.nested.apexChartsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.chartPackage.nested.apexChartsType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.chartPackage.route,
                      routePaths.packages.nested.chartPackage.nested.nivoType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.chartPackage.nested.nivoType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.chartPackage.route,
                      routePaths.packages.nested.chartPackage.nested.highchartsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.chartPackage.nested.highchartsType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.chartPackage.route,
                      routePaths.packages.nested.chartPackage.nested.googleChartsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.chartPackage.nested.googleChartsType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.chartPackage.route,
                      routePaths.packages.nested.chartPackage.nested.victoryType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.chartPackage.nested.victoryType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.chartPackage.route,
                      routePaths.packages.nested.chartPackage.nested.rechartsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.chartPackage.nested.rechartsType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.chartPackage.route,
                      routePaths.packages.nested.chartPackage.nested.reactChartJsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.chartPackage.nested.reactChartJsType.component}</>,
                },
              ]
            },
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.inputFormPackage.route,
                ]
              }),
              element: <>{routePaths.packages.nested.inputFormPackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.inputFormPackage.route,
                      routePaths.packages.nested.inputFormPackage.nested.reactSelectType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.inputFormPackage.nested.reactSelectType.component}</>,
                },
              ]
            },
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.someUsefulPackage.route
                ]
              }),
              element: <>{routePaths.packages.nested.someUsefulPackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.someUsefulPackage.route,
                      routePaths.packages.nested.someUsefulPackage.nested.fakerJsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.someUsefulPackage.nested.fakerJsType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.someUsefulPackage.route,
                      routePaths.packages.nested.someUsefulPackage.nested.logSymbolsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.someUsefulPackage.nested.logSymbolsType.component}</>,
                },
              ]
            },
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.layoutStylingPackage.route,
                ]
              }),
              element: <>{routePaths.packages.nested.layoutStylingPackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.layoutStylingPackage.route,
                      routePaths.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.layoutStylingPackage.route,
                      routePaths.packages.nested.layoutStylingPackage.nested.chromaJsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.layoutStylingPackage.nested.chromaJsType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.layoutStylingPackage.route,
                      routePaths.packages.nested.layoutStylingPackage.nested.tailwindType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.layoutStylingPackage.nested.tailwindType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.layoutStylingPackage.route,
                      routePaths.packages.nested.layoutStylingPackage.nested.styleBootstrapType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.layoutStylingPackage.nested.styleBootstrapType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.layoutStylingPackage.route,
                      routePaths.packages.nested.layoutStylingPackage.nested.styledComponentsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.layoutStylingPackage.nested.styledComponentsType.component}</>,
                },
              ]
            },
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.animationPackage.route,
                ]
              }),
              element: <>{routePaths.packages.nested.animationPackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.animationPackage.route,
                      routePaths.packages.nested.animationPackage.nested.animeJsType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.animationPackage.nested.animeJsType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.animationPackage.route,
                      routePaths.packages.nested.animationPackage.nested.framerMotionType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.animationPackage.nested.framerMotionType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.animationPackage.route,
                      routePaths.packages.nested.animationPackage.nested.reactSpringType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.animationPackage.nested.reactSpringType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.animationPackage.route,
                      routePaths.packages.nested.animationPackage.nested.animateType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.animationPackage.nested.animateType.component}</>,
                },
              ]
            },
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.pageScrollPackage.route,
                ]
              }),
              element: <>{routePaths.packages.nested.pageScrollPackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.pageScrollPackage.route,
                      routePaths.packages.nested.pageScrollPackage.nested.reactScrollType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.pageScrollPackage.nested.reactScrollType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.pageScrollPackage.route,
                      routePaths.packages.nested.pageScrollPackage.nested.smoothScrollbarType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.pageScrollPackage.nested.smoothScrollbarType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.pageScrollPackage.route,
                      routePaths.packages.nested.pageScrollPackage.nested.intersectionObserverType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.pageScrollPackage.nested.intersectionObserverType.component}</>,
                },
              ]
            },
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.tostAlertPackage.route,
                ]
              }),
              element: <>{routePaths.packages.nested.tostAlertPackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.tostAlertPackage.route,
                      routePaths.packages.nested.tostAlertPackage.nested.toastifyType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.tostAlertPackage.nested.toastifyType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.tostAlertPackage.route,
                      routePaths.packages.nested.tostAlertPackage.nested.sweetAlertType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.tostAlertPackage.nested.sweetAlertType.component}</>,
                },
              ]
            },
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.dateTimePackage.route,
                ]
              }),
              element: <>{routePaths.packages.nested.dateTimePackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.dateTimePackage.route,
                      routePaths.packages.nested.dateTimePackage.nested.luxonType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.dateTimePackage.nested.luxonType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.dateTimePackage.route,
                      routePaths.packages.nested.dateTimePackage.nested.momentType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.dateTimePackage.nested.momentType.component}</>,
                },
              ]
            },
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.paginationPackage.route,
                ]
              }),
              element: <>{routePaths.packages.nested.paginationPackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.paginationPackage.route,
                      routePaths.packages.nested.paginationPackage.nested.reactPaginateType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.paginationPackage.nested.reactPaginateType.component}</>,
                },
              ]
            },
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.loaderProgressPackage.route
                ]
              }),
              element: <>{routePaths.packages.nested.loaderProgressPackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.loaderProgressPackage.route,
                      routePaths.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.loaderProgressPackage.route,
                      routePaths.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.loaderProgressPackage.route,
                      routePaths.packages.nested.loaderProgressPackage.nested.rcProgressType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.loaderProgressPackage.nested.rcProgressType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.loaderProgressPackage.route,
                      routePaths.packages.nested.loaderProgressPackage.nested.respinnerType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.loaderProgressPackage.nested.respinnerType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.loaderProgressPackage.route,
                      routePaths.packages.nested.loaderProgressPackage.nested.spinnersReactType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.loaderProgressPackage.nested.spinnersReactType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.loaderProgressPackage.route,
                      routePaths.packages.nested.loaderProgressPackage.nested.reactSpinnersType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.loaderProgressPackage.nested.reactSpinnersType.component}</>,
                },
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.loaderProgressPackage.route,
                      routePaths.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.component}</>,
                },
              ]
            },
            {
              path: useHelper({
                type: 'routeConcatenate', data: [
                  routePaths.packages.route,
                  routePaths.packages.nested.iconPackage.route,
                ]
              }),
              element: <>{routePaths.packages.nested.iconPackage.component}</>,
              children: [
                {
                  path: useHelper({
                    type: 'routeConcatenate', data: [
                      routePaths.packages.route,
                      routePaths.packages.nested.iconPackage.route,
                      routePaths.packages.nested.iconPackage.nested.reactIconType.route
                    ]
                  }),
                  element: <>{routePaths.packages.nested.iconPackage.nested.reactIconType.component}</>,
                },
              ]
            },
          ]
        },
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
