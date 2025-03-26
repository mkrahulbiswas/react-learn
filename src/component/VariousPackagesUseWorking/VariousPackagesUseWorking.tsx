import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./Layout/Layout";
import { ErrorPage } from "./Component/ErrorPage/ErrorPage";
import { Packages } from "./Component/Packages/Packages";
import { Home } from "./Component/Home/Home";
import { UiComponentPackage } from "./Component/Packages/UiComponentPackage/UiComponentPackage";
import { BlueprintJsType } from "./Component/Packages/UiComponentPackage/BlueprintJsType/BlueprintJsType";
import { SpectrumWebComponentsType } from "./Component/Packages/UiComponentPackage/SpectrumWebComponentsType/SpectrumWebComponentsType";
import { ChakraUiType } from "./Component/Packages/UiComponentPackage/ChakraUiType/ChakraUiType";
import { FluentUiType } from "./Component/Packages/UiComponentPackage/FluentUiType/FluentUiType";
import { SemanticUiReactType } from "./Component/Packages/UiComponentPackage/SemanticUiReactType/SemanticUiReactType";
import { AntDesignType } from "./Component/Packages/UiComponentPackage/AntDesignType/AntDesignType";
import { MaterialUiType } from "./Component/Packages/UiComponentPackage/MaterialUiType/MaterialUiType";
import { PrimereactType } from "./Component/Packages/UiComponentPackage/PrimereactType/PrimereactType";
import { ChartPackage } from "./Component/Packages/ChartPackage/ChartPackage";
import { ApexChartsType } from "./Component/Packages/ChartPackage/ApexChartsType/ApexChartsType";
import { NivoType } from "./Component/Packages/ChartPackage/NivoType/NivoType";
import { GoogleChartsType } from "./Component/Packages/ChartPackage/GoogleChartsType/GoogleChartsType";
import { VictoryType } from "./Component/Packages/ChartPackage/VictoryType/VictoryType";
import { RechartsType } from "./Component/Packages/ChartPackage/RechartsType/RechartsType";
import { ReactChartJsType } from "./Component/Packages/ChartPackage/ReactChartJsType/ReactChartJsType";
import { InputFormPackage } from "./Component/Packages/InputFormPackage/InputFormPackage";
import { ReactSelectType } from "./Component/Packages/InputFormPackage/ReactSelectType/ReactSelectType";
import { SomeUsefulPackage } from "./Component/Packages/SomeUsefulPackage/SomeUsefulPackage";
import { FakerJsType } from "./Component/Packages/SomeUsefulPackage/FakerJsType/FakerJsType";
import { LogSymbolsType } from "./Component/Packages/SomeUsefulPackage/LogSymbolsType/LogSymbolsType";
import { LayoutStylingPackage } from "./Component/Packages/LayoutStylingPackage/LayoutStylingPackage";
import { ReactGridLayoutType } from "./Component/Packages/LayoutStylingPackage/ReactGridLayoutType/ReactGridLayoutType";
import { ChromaJsType } from "./Component/Packages/LayoutStylingPackage/ChromaJsType/ChromaJsType";
import { TailwindType } from "./Component/Packages/LayoutStylingPackage/TailwindType/TailwindType";
import { StyledComponentsType } from "./Component/Packages/LayoutStylingPackage/StyledComponentsType/StyledComponentsType";
import { AnimationPackage } from "./Component/Packages/AnimationPackage/AnimationPackage";
import { AnimeJsType } from "./Component/Packages/AnimationPackage/AnimeJsType/AnimeJsType";
import { FramerMotionType } from "./Component/Packages/AnimationPackage/FramerMotionType/FramerMotionType";
import { ReactSpringType } from "./Component/Packages/AnimationPackage/ReactSpringType/ReactSpringType";
import { AnimateType } from "./Component/Packages/AnimationPackage/AnimateType/AnimateType";
import { PageScrollPackage } from "./Component/Packages/PageScrollPackage/PageScrollPackage";
import { ReactScrollType } from "./Component/Packages/PageScrollPackage/ReactScrollType/ReactScrollType";
import { SmoothScrollbarType } from "./Component/Packages/PageScrollPackage/SmoothScrollbarType/SmoothScrollbarType";
import { IntersectionObserverType } from "./Component/Packages/PageScrollPackage/IntersectionObserverType/IntersectionObserverType";
import { TostAlertPackage } from "./Component/Packages/TostAlertPackage/TostAlertPackage";
import { ToastifyType } from "./Component/Packages/TostAlertPackage/ToastifyType/ToastifyType";
import { SweetAlertType } from "./Component/Packages/TostAlertPackage/SweetAlertType/SweetAlertType";
import { DateTimePackage } from "./Component/Packages/DateTimePackage/DateTimePackage";
import { LuxonType } from "./Component/Packages/DateTimePackage/LuxonType/LuxonType";
import { MomentType } from "./Component/Packages/DateTimePackage/MomentType/MomentType";
import { PaginationPackage } from "./Component/Packages/PaginationPackage/PaginationPackage";
import { ReactPaginateType } from "./Component/Packages/PaginationPackage/ReactPaginateType/ReactPaginateType";
import { LoaderProgressPackage } from "./Component/Packages/LoaderProgressPackage/LoaderProgressPackage";
import { ReactTopLoadingBarType } from "./Component/Packages/LoaderProgressPackage/ReactTopLoadingBarType/ReactTopLoadingBarType";
import { ReactCircularProgressbarType } from "./Component/Packages/LoaderProgressPackage/ReactCircularProgressbarType/ReactCircularProgressbarType";
import { RcProgressType } from "./Component/Packages/LoaderProgressPackage/RcProgressType/RcProgressType";
import { RespinnerType } from "./Component/Packages/LoaderProgressPackage/RespinnerType/RespinnerType";
import { SpinnersReactType } from "./Component/Packages/LoaderProgressPackage/SpinnersReactType/SpinnersReactType";
import { ReactSpinnersType } from "./Component/Packages/LoaderProgressPackage/ReactSpinnersType/ReactSpinnersType";
import { ReactLoaderSpinnerType } from "./Component/Packages/LoaderProgressPackage/ReactLoaderSpinnerType/ReactLoaderSpinnerType";
import { IconPackage } from "./Component/Packages/IconPackage/IconPackage";
import { ReactIconType } from "./Component/Packages/IconPackage/ReactIconType/ReactIconType";
import { HighchartsType } from "./Component/Packages/ChartPackage/HighchartsType/HighchartsType";
import { BootstrapType as StyleBootstrapType } from "./Component/Packages/LayoutStylingPackage/BootstrapType/BootstrapType";
import { BootstrapType as UiBootstrap } from "./Component/Packages/UiComponentPackage/BootstrapType/BootstrapType";
import "./VariousPackagesUseWorking.scss";
import { PackagesContextProvider } from "./Context/PackagesContext";
import { CommonContextProvider } from "./Context/CommonContext";
import { RouteContextProvider } from "./Context/RouteContext";

export const VariousPackagesUseWorking = () => {
  const routePaths = {
    packages: 'packages',
    // packages: {

    // }
  }
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
          path: routePaths.packages,
          element: <PackagesContextProvider>
            <Packages propsPass={{ routePaths: routePaths }} />
          </PackagesContextProvider>,
          children: [
            {
              path: '/' + routePaths.packages + '/ui-component-package',
              element: <UiComponentPackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/ui-component-package/blueprint-js-type',
                  element: <BlueprintJsType />
                },
                {
                  path: '/' + routePaths.packages + '/ui-component-package/spectrum-web-components-type',
                  element: <SpectrumWebComponentsType />
                },
                {
                  path: '/' + routePaths.packages + '/ui-component-package/chakra-ui-type',
                  element: <ChakraUiType />
                },
                {
                  path: '/' + routePaths.packages + '/ui-component-package/fluent-ui-type',
                  element: <FluentUiType />
                },
                {
                  path: '/' + routePaths.packages + '/ui-component-package/semantic-ui-react-type',
                  element: <SemanticUiReactType />
                },
                {
                  path: '/' + routePaths.packages + '/ui-component-package/ant-design-type',
                  element: <AntDesignType />
                },
                {
                  path: '/' + routePaths.packages + '/ui-component-package/material-ui-type',
                  element: <MaterialUiType />
                },
                {
                  path: '/' + routePaths.packages + '/ui-component-package/primereact-type',
                  element: <PrimereactType />
                },
                {
                  path: '/' + routePaths.packages + '/ui-component-package/bootstrap-type',
                  element: <UiBootstrap />
                },
              ]
            },
            {
              path: '/' + routePaths.packages + '/chart-package',
              element: <ChartPackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/chart-package/apex-charts-type',
                  element: <ApexChartsType />
                },
                {
                  path: '/' + routePaths.packages + '/chart-package/nivo-type',
                  element: <NivoType />
                },
                {
                  path: '/' + routePaths.packages + '/chart-package/highcharts-type',
                  element: <HighchartsType />
                },
                {
                  path: '/' + routePaths.packages + '/chart-package/google-charts-type',
                  element: <GoogleChartsType />
                },
                {
                  path: '/' + routePaths.packages + '/chart-package/victory-type',
                  element: <VictoryType />
                },
                {
                  path: '/' + routePaths.packages + '/chart-package/recharts-type',
                  element: <RechartsType />
                },
                {
                  path: '/' + routePaths.packages + '/chart-package/react-chart-js-type',
                  element: <ReactChartJsType />
                },
              ]
            },
            {
              path: '/' + routePaths.packages + '/input-form-package',
              element: <InputFormPackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/input-form-package/react-select-type',
                  element: <ReactSelectType />
                },
              ]
            },
            {
              path: '/' + routePaths.packages + '/some-useful-package',
              element: <SomeUsefulPackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/some-useful-package/faker-js-type',
                  element: <FakerJsType />
                },
                {
                  path: '/' + routePaths.packages + '/some-useful-package/log-symbols-type',
                  element: <LogSymbolsType />
                },
              ]
            },
            {
              path: '/' + routePaths.packages + '/layout-styling-package',
              element: <LayoutStylingPackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/layout-styling-package/react-grid-layout-type',
                  element: <ReactGridLayoutType />
                },
                {
                  path: '/' + routePaths.packages + '/layout-styling-package/chromaJs-type',
                  element: <ChromaJsType />
                },
                {
                  path: '/' + routePaths.packages + '/layout-styling-package/tailwind-type',
                  element: <TailwindType />
                },
                {
                  path: '/' + routePaths.packages + '/layout-styling-package/bootstrap-type',
                  element: <StyleBootstrapType />
                },
                {
                  path: '/' + routePaths.packages + '/layout-styling-package/styled-components-type',
                  element: <StyledComponentsType />
                },
              ]
            },
            {
              path: '/' + routePaths.packages + '/animation-package',
              element: <AnimationPackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/animation-package/anime-js-type',
                  element: <AnimeJsType />
                },
                {
                  path: '/' + routePaths.packages + '/animation-package/framer-motion-type',
                  element: <FramerMotionType />
                },
                {
                  path: '/' + routePaths.packages + '/animation-package/react-spring-type',
                  element: <ReactSpringType />
                },
                {
                  path: '/' + routePaths.packages + '/animation-package/animate-type',
                  element: <AnimateType />
                },
              ]
            },
            {
              path: '/' + routePaths.packages + '/page-scroll-package',
              element: <PageScrollPackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/page-scroll-package/react-scroll-type',
                  element: <ReactScrollType />
                },
                {
                  path: '/' + routePaths.packages + '/page-scroll-package/smooth-scrollbar-type',
                  element: <SmoothScrollbarType />
                },
                {
                  path: '/' + routePaths.packages + '/page-scroll-package/intersection-observer-type',
                  element: <IntersectionObserverType />
                },
              ]
            },
            {
              path: '/' + routePaths.packages + '/tost-alert-package',
              element: <TostAlertPackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/tost-alert-package/toastify-type',
                  element: <ToastifyType />
                },
                {
                  path: '/' + routePaths.packages + '/tost-alert-package/sweet-alert-type',
                  element: <SweetAlertType />
                },
              ]
            },
            {
              path: '/' + routePaths.packages + '/date-time-package',
              element: <DateTimePackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/date-time-package/luxon-type',
                  element: <LuxonType />
                },
                {
                  path: '/' + routePaths.packages + '/date-time-package/moment-type',
                  element: <MomentType />
                },
              ]
            },
            {
              path: '/' + routePaths.packages + '/pagination-package',
              element: <PaginationPackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/pagination-package/react-paginate-type',
                  element: <ReactPaginateType />
                },
              ]
            },
            {
              path: '/' + routePaths.packages + '/loader-progress-package',
              element: <LoaderProgressPackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/loader-progress-package/react-top-loading-bar-type',
                  element: <ReactTopLoadingBarType />
                },
                {
                  path: '/' + routePaths.packages + '/loader-progress-package/react-circular-progressbar-type',
                  element: <ReactCircularProgressbarType />
                },
                {
                  path: '/' + routePaths.packages + '/loader-progress-package/rc-progress-type',
                  element: <RcProgressType />
                },
                {
                  path: '/' + routePaths.packages + '/loader-progress-package/respinner-type',
                  element: <RespinnerType />
                },
                {
                  path: '/' + routePaths.packages + '/loader-progress-package/spinners-react-type',
                  element: <SpinnersReactType />
                },
                {
                  path: '/' + routePaths.packages + '/loader-progress-package/react-spinners-type',
                  element: <ReactSpinnersType />
                },
                {
                  path: '/' + routePaths.packages + '/loader-progress-package/react-loader-spinner-type',
                  element: <ReactLoaderSpinnerType />
                },
              ]
            },
            {
              path: '/' + routePaths.packages + '/icon-package',
              element: <IconPackage />,
              children: [
                {
                  path: '/' + routePaths.packages + '/icon-package/react-icon-type',
                  element: <ReactIconType />
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
