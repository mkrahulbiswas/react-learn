import { PackagesContextProvider } from "../../../Context/PackagesContext";
import { Packages } from "../../../Component/Packages/Packages"
import { UiComponentPackage } from "../../../Component/Packages/UiComponentPackage/UiComponentPackage";
import { BlueprintJsType } from "../../../Component/Packages/UiComponentPackage/BlueprintJsType/BlueprintJsType";
import { SpectrumWebComponentsType } from "../../../Component/Packages/UiComponentPackage/SpectrumWebComponentsType/SpectrumWebComponentsType";
import { ChakraUiType } from "../../../Component/Packages/UiComponentPackage/ChakraUiType/ChakraUiType";
import { FluentUiType } from "../../../Component/Packages/UiComponentPackage/FluentUiType/FluentUiType";
import { SemanticUiReactType } from "../../../Component/Packages/UiComponentPackage/SemanticUiReactType/SemanticUiReactType";
import { AntDesignType } from "../../../Component/Packages/UiComponentPackage/AntDesignType/AntDesignType";
import { MaterialUiType } from "../../../Component/Packages/UiComponentPackage/MaterialUiType/MaterialUiType";
import { PrimereactType } from "../../../Component/Packages/UiComponentPackage/PrimereactType/PrimereactType";
import { ChartPackage } from "../../../Component/Packages/ChartPackage/ChartPackage";
import { ApexChartsType } from "../../../Component/Packages/ChartPackage/ApexChartsType/ApexChartsType";
import { NivoType } from "../../../Component/Packages/ChartPackage/NivoType/NivoType";
import { GoogleChartsType } from "../../../Component/Packages/ChartPackage/GoogleChartsType/GoogleChartsType";
import { VictoryType } from "../../../Component/Packages/ChartPackage/VictoryType/VictoryType";
import { RechartsType } from "../../../Component/Packages/ChartPackage/RechartsType/RechartsType";
import { ReactChartJsType } from "../../../Component/Packages/ChartPackage/ReactChartJsType/ReactChartJsType";
import { InputFormPackage } from "../../../Component/Packages/InputFormPackage/InputFormPackage";
import { ReactSelectType } from "../../../Component/Packages/InputFormPackage/ReactSelectType/ReactSelectType";
import { SomeUsefulPackage } from "../../../Component/Packages/SomeUsefulPackage/SomeUsefulPackage";
import { FakerJsType } from "../../../Component/Packages/SomeUsefulPackage/FakerJsType/FakerJsType";
import { LogSymbolsType } from "../../../Component/Packages/SomeUsefulPackage/LogSymbolsType/LogSymbolsType";
import { LayoutStylingPackage } from "../../../Component/Packages/LayoutStylingPackage/LayoutStylingPackage";
import { ReactGridLayoutType } from "../../../Component/Packages/LayoutStylingPackage/ReactGridLayoutType/ReactGridLayoutType";
import { ChromaJsType } from "../../../Component/Packages/LayoutStylingPackage/ChromaJsType/ChromaJsType";
import { TailwindType } from "../../../Component/Packages/LayoutStylingPackage/TailwindType/TailwindType";
import { StyledComponentsType } from "../../../Component/Packages/LayoutStylingPackage/StyledComponentsType/StyledComponentsType";
import { AnimationPackage } from "../../../Component/Packages/AnimationPackage/AnimationPackage";
import { AnimeJsType } from "../../../Component/Packages/AnimationPackage/AnimeJsType/AnimeJsType";
import { FramerMotionType } from "../../../Component/Packages/AnimationPackage/FramerMotionType/FramerMotionType";
import { ReactSpringType } from "../../../Component/Packages/AnimationPackage/ReactSpringType/ReactSpringType";
import { AnimateType } from "../../../Component/Packages/AnimationPackage/AnimateType/AnimateType";
import { PageScrollPackage } from "../../../Component/Packages/PageScrollPackage/PageScrollPackage";
import { ReactScrollType } from "../../../Component/Packages/PageScrollPackage/ReactScrollType/ReactScrollType";
import { SmoothScrollbarType } from "../../../Component/Packages/PageScrollPackage/SmoothScrollbarType/SmoothScrollbarType";
import { IntersectionObserverType } from "../../../Component/Packages/PageScrollPackage/IntersectionObserverType/IntersectionObserverType";
import { TostAlertPackage } from "../../../Component/Packages/TostAlertPackage/TostAlertPackage";
import { ToastifyType } from "../../../Component/Packages/TostAlertPackage/ToastifyType/ToastifyType";
import { SweetAlertType } from "../../../Component/Packages/TostAlertPackage/SweetAlertType/SweetAlertType";
import { DateTimePackage } from "../../../Component/Packages/DateTimePackage/DateTimePackage";
import { LuxonType } from "../../../Component/Packages/DateTimePackage/LuxonType/LuxonType";
import { MomentType } from "../../../Component/Packages/DateTimePackage/MomentType/MomentType";
import { PaginationPackage } from "../../../Component/Packages/PaginationPackage/PaginationPackage";
import { ReactPaginateType } from "../../../Component/Packages/PaginationPackage/ReactPaginateType/ReactPaginateType";
import { LoaderProgressPackage } from "../../../Component/Packages/LoaderProgressPackage/LoaderProgressPackage";
import { ReactTopLoadingBarType } from "../../../Component/Packages/LoaderProgressPackage/ReactTopLoadingBarType/ReactTopLoadingBarType";
import { ReactCircularProgressbarType } from "../../../Component/Packages/LoaderProgressPackage/ReactCircularProgressbarType/ReactCircularProgressbarType";
import { RcProgressType } from "../../../Component/Packages/LoaderProgressPackage/RcProgressType/RcProgressType";
import { RespinnerType } from "../../../Component/Packages/LoaderProgressPackage/RespinnerType/RespinnerType";
import { SpinnersReactType } from "../../../Component/Packages/LoaderProgressPackage/SpinnersReactType/SpinnersReactType";
import { ReactSpinnersType } from "../../../Component/Packages/LoaderProgressPackage/ReactSpinnersType/ReactSpinnersType";
import { ReactLoaderSpinnerType } from "../../../Component/Packages/LoaderProgressPackage/ReactLoaderSpinnerType/ReactLoaderSpinnerType";
import { IconPackage } from "../../../Component/Packages/IconPackage/IconPackage";
import { ReactIconType } from "../../../Component/Packages/IconPackage/ReactIconType/ReactIconType";
import { HighchartsType } from "../../../Component/Packages/ChartPackage/HighchartsType/HighchartsType";
import { BootstrapType as StyleBootstrapType } from "../../../Component/Packages/LayoutStylingPackage/BootstrapType/BootstrapType";
import { BootstrapType as UiBootstrap } from "../../../Component/Packages/UiComponentPackage/BootstrapType/BootstrapType";
import { useHelperHook } from "../../../Hooks/useHelperHook";
import { getPackagesRouteData } from "./PackagesRouteData";
import { getPackagesRouteLoader } from "./PackagesRouteLoader";

export const getPackagesRouteLink = (dataPass: any) => {
    const packagesRouteData = getPackagesRouteData({})
    return {
        path: useHelperHook({
            type: 'routeConcatenate', data: [
                packagesRouteData.packages.route
            ]
        }),
        loader: () => getPackagesRouteLoader({
            type: packagesRouteData.packages.route
        }),
        element: <PackagesContextProvider>
            <Packages />
        </PackagesContextProvider>,
        children: [
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.uiComponentPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.uiComponentPackage.route,
                }),
                element: <UiComponentPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.blueprintJsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.blueprintJsType.route
                        }),
                        element: <BlueprintJsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.route
                        }),
                        element: <SpectrumWebComponentsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.chakraUiType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.chakraUiType.route
                        }),
                        element: <ChakraUiType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.fluentUiType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.fluentUiType.route
                        }),
                        element: <FluentUiType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.semanticUiReactType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.semanticUiReactType.route
                        }),
                        element: <SemanticUiReactType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.antDesignType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.antDesignType.route
                        }),
                        element: <AntDesignType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.materialUiType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.materialUiType.route
                        }),
                        element: <MaterialUiType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.primereactType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.primereactType.route
                        }),
                        element: <PrimereactType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.uiComponentPackage.route,
                                packagesRouteData.packages.nested.uiComponentPackage.nested.uiBootstrap.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.uiComponentPackage.nested.uiBootstrap.route
                        }),
                        element: <UiBootstrap />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.chartPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.chartPackage.route,
                }),
                element: <ChartPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.apexChartsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.apexChartsType.route
                        }),
                        element: <ApexChartsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.nivoType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.nivoType.route
                        }),
                        element: <NivoType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.highchartsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.highchartsType.route
                        }),
                        element: <HighchartsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.googleChartsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.googleChartsType.route
                        }),
                        element: <GoogleChartsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.victoryType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.victoryType.route
                        }),
                        element: <VictoryType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.rechartsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.rechartsType.route
                        }),
                        element: <RechartsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.chartPackage.route,
                                packagesRouteData.packages.nested.chartPackage.nested.reactChartJsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.chartPackage.nested.reactChartJsType.route
                        }),
                        element: <ReactChartJsType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.inputFormPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.inputFormPackage.route,
                }),
                element: <InputFormPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.inputFormPackage.route,
                                packagesRouteData.packages.nested.inputFormPackage.nested.reactSelectType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.inputFormPackage.nested.reactSelectType.route
                        }),
                        element: <ReactSelectType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.someUsefulPackage.route
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.someUsefulPackage.route
                }),
                element: <SomeUsefulPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.someUsefulPackage.route,
                                packagesRouteData.packages.nested.someUsefulPackage.nested.fakerJsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.someUsefulPackage.nested.fakerJsType.route
                        }),
                        element: <FakerJsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.someUsefulPackage.route,
                                packagesRouteData.packages.nested.someUsefulPackage.nested.logSymbolsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.someUsefulPackage.nested.logSymbolsType.route
                        }),
                        element: <LogSymbolsType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.layoutStylingPackage.route
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.layoutStylingPackage.route
                }),
                element: <LayoutStylingPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.route
                        }),
                        element: <ReactGridLayoutType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.nested.chromaJsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.layoutStylingPackage.nested.chromaJsType.route
                        }),
                        element: <ChromaJsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.nested.tailwindType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.layoutStylingPackage.nested.tailwindType.route
                        }),
                        element: <TailwindType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.nested.styleBootstrapType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.layoutStylingPackage.nested.styleBootstrapType.route
                        }),
                        element: <StyleBootstrapType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.route,
                                packagesRouteData.packages.nested.layoutStylingPackage.nested.styledComponentsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.layoutStylingPackage.nested.styledComponentsType.route
                        }),
                        element: <StyledComponentsType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.animationPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.animationPackage.route,
                }),
                element: <AnimationPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.animationPackage.route,
                                packagesRouteData.packages.nested.animationPackage.nested.animeJsType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.animationPackage.nested.animeJsType.route
                        }),
                        element: <AnimeJsType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.animationPackage.route,
                                packagesRouteData.packages.nested.animationPackage.nested.framerMotionType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.animationPackage.nested.framerMotionType.route
                        }),
                        element: <FramerMotionType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.animationPackage.route,
                                packagesRouteData.packages.nested.animationPackage.nested.reactSpringType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.animationPackage.nested.reactSpringType.route
                        }),
                        element: <ReactSpringType />,
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.animationPackage.route,
                                packagesRouteData.packages.nested.animationPackage.nested.animateType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.animationPackage.nested.animateType.route
                        }),
                        element: <AnimateType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.pageScrollPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.pageScrollPackage.route,
                }),
                element: <PageScrollPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.pageScrollPackage.route,
                                packagesRouteData.packages.nested.pageScrollPackage.nested.reactScrollType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.pageScrollPackage.nested.reactScrollType.route
                        }),
                        element: <ReactScrollType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.pageScrollPackage.route,
                                packagesRouteData.packages.nested.pageScrollPackage.nested.smoothScrollbarType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.pageScrollPackage.nested.smoothScrollbarType.route
                        }),
                        element: <SmoothScrollbarType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.pageScrollPackage.route,
                                packagesRouteData.packages.nested.pageScrollPackage.nested.intersectionObserverType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.pageScrollPackage.nested.intersectionObserverType.route
                        }),
                        element: <IntersectionObserverType />,
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.tostAlertPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.tostAlertPackage.route,
                }),
                element: <TostAlertPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.tostAlertPackage.route,
                                packagesRouteData.packages.nested.tostAlertPackage.nested.toastifyType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.tostAlertPackage.nested.toastifyType.route
                        }),
                        element: <ToastifyType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.tostAlertPackage.route,
                                packagesRouteData.packages.nested.tostAlertPackage.nested.sweetAlertType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.tostAlertPackage.nested.sweetAlertType.route
                        }),
                        element: <SweetAlertType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.dateTimePackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.dateTimePackage.route,
                }),
                element: <DateTimePackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.dateTimePackage.route,
                                packagesRouteData.packages.nested.dateTimePackage.nested.luxonType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.dateTimePackage.nested.luxonType.route
                        }),
                        element: <LuxonType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.dateTimePackage.route,
                                packagesRouteData.packages.nested.dateTimePackage.nested.momentType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.dateTimePackage.nested.momentType.route
                        }),
                        element: <MomentType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.paginationPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.paginationPackage.route,
                }),
                element: <PaginationPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.paginationPackage.route,
                                packagesRouteData.packages.nested.paginationPackage.nested.reactPaginateType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.paginationPackage.nested.reactPaginateType.route
                        }),
                        element: <ReactPaginateType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.loaderProgressPackage.route
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.loaderProgressPackage.route
                }),
                element: <LoaderProgressPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.route
                        }),
                        element: <ReactTopLoadingBarType />,
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.route
                        }),
                        element: <ReactCircularProgressbarType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.rcProgressType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.rcProgressType.route
                        }),
                        element: <RcProgressType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.respinnerType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.respinnerType.route
                        }),
                        element: <RespinnerType />,
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.spinnersReactType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.spinnersReactType.route
                        }),
                        element: <SpinnersReactType />
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.reactSpinnersType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactSpinnersType.route
                        }),
                        element: <ReactSpinnersType />,
                    },
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.route,
                                packagesRouteData.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.route
                        }),
                        element: <ReactLoaderSpinnerType />
                    }
                ]
            },
            {
                path: useHelperHook({
                    type: 'routeConcatenate', data: [
                        packagesRouteData.packages.route,
                        packagesRouteData.packages.nested.iconPackage.route,
                    ]
                }),
                loader: () => getPackagesRouteLoader({
                    type: packagesRouteData.packages.nested.iconPackage.route,
                }),
                element: <IconPackage />,
                children: [
                    {
                        path: useHelperHook({
                            type: 'routeConcatenate', data: [
                                packagesRouteData.packages.route,
                                packagesRouteData.packages.nested.iconPackage.route,
                                packagesRouteData.packages.nested.iconPackage.nested.reactIconType.route
                            ]
                        }),
                        loader: () => getPackagesRouteLoader({
                            type: packagesRouteData.packages.nested.iconPackage.nested.reactIconType.route
                        }),
                        element: <ReactIconType />
                    }
                ]
            }
        ]
    }
}