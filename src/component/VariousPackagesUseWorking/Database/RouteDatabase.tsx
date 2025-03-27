import { Packages } from "../Component/Packages/Packages"
import { UiComponentPackage } from "../Component/Packages/UiComponentPackage/UiComponentPackage";
import { BlueprintJsType } from "../Component/Packages/UiComponentPackage/BlueprintJsType/BlueprintJsType";
import { SpectrumWebComponentsType } from "../Component/Packages/UiComponentPackage/SpectrumWebComponentsType/SpectrumWebComponentsType";
import { ChakraUiType } from "../Component/Packages/UiComponentPackage/ChakraUiType/ChakraUiType";
import { FluentUiType } from "../Component/Packages/UiComponentPackage/FluentUiType/FluentUiType";
import { SemanticUiReactType } from "../Component/Packages/UiComponentPackage/SemanticUiReactType/SemanticUiReactType";
import { AntDesignType } from "../Component/Packages/UiComponentPackage/AntDesignType/AntDesignType";
import { MaterialUiType } from "../Component/Packages/UiComponentPackage/MaterialUiType/MaterialUiType";
import { PrimereactType } from "../Component/Packages/UiComponentPackage/PrimereactType/PrimereactType";
import { ChartPackage } from "../Component/Packages/ChartPackage/ChartPackage";
import { ApexChartsType } from "../Component/Packages/ChartPackage/ApexChartsType/ApexChartsType";
import { NivoType } from "../Component/Packages/ChartPackage/NivoType/NivoType";
import { GoogleChartsType } from "../Component/Packages/ChartPackage/GoogleChartsType/GoogleChartsType";
import { VictoryType } from "../Component/Packages/ChartPackage/VictoryType/VictoryType";
import { RechartsType } from "../Component/Packages/ChartPackage/RechartsType/RechartsType";
import { ReactChartJsType } from "../Component/Packages/ChartPackage/ReactChartJsType/ReactChartJsType";
import { InputFormPackage } from "../Component/Packages/InputFormPackage/InputFormPackage";
import { ReactSelectType } from "../Component/Packages/InputFormPackage/ReactSelectType/ReactSelectType";
import { SomeUsefulPackage } from "../Component/Packages/SomeUsefulPackage/SomeUsefulPackage";
import { FakerJsType } from "../Component/Packages/SomeUsefulPackage/FakerJsType/FakerJsType";
import { LogSymbolsType } from "../Component/Packages/SomeUsefulPackage/LogSymbolsType/LogSymbolsType";
import { LayoutStylingPackage } from "../Component/Packages/LayoutStylingPackage/LayoutStylingPackage";
import { ReactGridLayoutType } from "../Component/Packages/LayoutStylingPackage/ReactGridLayoutType/ReactGridLayoutType";
import { ChromaJsType } from "../Component/Packages/LayoutStylingPackage/ChromaJsType/ChromaJsType";
import { TailwindType } from "../Component/Packages/LayoutStylingPackage/TailwindType/TailwindType";
import { StyledComponentsType } from "../Component/Packages/LayoutStylingPackage/StyledComponentsType/StyledComponentsType";
import { AnimationPackage } from "../Component/Packages/AnimationPackage/AnimationPackage";
import { AnimeJsType } from "../Component/Packages/AnimationPackage/AnimeJsType/AnimeJsType";
import { FramerMotionType } from "../Component/Packages/AnimationPackage/FramerMotionType/FramerMotionType";
import { ReactSpringType } from "../Component/Packages/AnimationPackage/ReactSpringType/ReactSpringType";
import { AnimateType } from "../Component/Packages/AnimationPackage/AnimateType/AnimateType";
import { PageScrollPackage } from "../Component/Packages/PageScrollPackage/PageScrollPackage";
import { ReactScrollType } from "../Component/Packages/PageScrollPackage/ReactScrollType/ReactScrollType";
import { SmoothScrollbarType } from "../Component/Packages/PageScrollPackage/SmoothScrollbarType/SmoothScrollbarType";
import { IntersectionObserverType } from "../Component/Packages/PageScrollPackage/IntersectionObserverType/IntersectionObserverType";
import { TostAlertPackage } from "../Component/Packages/TostAlertPackage/TostAlertPackage";
import { ToastifyType } from "../Component/Packages/TostAlertPackage/ToastifyType/ToastifyType";
import { SweetAlertType } from "../Component/Packages/TostAlertPackage/SweetAlertType/SweetAlertType";
import { DateTimePackage } from "../Component/Packages/DateTimePackage/DateTimePackage";
import { LuxonType } from "../Component/Packages/DateTimePackage/LuxonType/LuxonType";
import { MomentType } from "../Component/Packages/DateTimePackage/MomentType/MomentType";
import { PaginationPackage } from "../Component/Packages/PaginationPackage/PaginationPackage";
import { ReactPaginateType } from "../Component/Packages/PaginationPackage/ReactPaginateType/ReactPaginateType";
import { LoaderProgressPackage } from "../Component/Packages/LoaderProgressPackage/LoaderProgressPackage";
import { ReactTopLoadingBarType } from "../Component/Packages/LoaderProgressPackage/ReactTopLoadingBarType/ReactTopLoadingBarType";
import { ReactCircularProgressbarType } from "../Component/Packages/LoaderProgressPackage/ReactCircularProgressbarType/ReactCircularProgressbarType";
import { RcProgressType } from "../Component/Packages/LoaderProgressPackage/RcProgressType/RcProgressType";
import { RespinnerType } from "../Component/Packages/LoaderProgressPackage/RespinnerType/RespinnerType";
import { SpinnersReactType } from "../Component/Packages/LoaderProgressPackage/SpinnersReactType/SpinnersReactType";
import { ReactSpinnersType } from "../Component/Packages/LoaderProgressPackage/ReactSpinnersType/ReactSpinnersType";
import { ReactLoaderSpinnerType } from "../Component/Packages/LoaderProgressPackage/ReactLoaderSpinnerType/ReactLoaderSpinnerType";
import { IconPackage } from "../Component/Packages/IconPackage/IconPackage";
import { ReactIconType } from "../Component/Packages/IconPackage/ReactIconType/ReactIconType";
import { HighchartsType } from "../Component/Packages/ChartPackage/HighchartsType/HighchartsType";
import { BootstrapType as StyleBootstrapType } from "../Component/Packages/LayoutStylingPackage/BootstrapType/BootstrapType";
import { BootstrapType as UiBootstrap } from "../Component/Packages/UiComponentPackage/BootstrapType/BootstrapType";

export const getRouteData = (dataPass: any) => {
    return {
        packages: {
            route: 'packages',
            name: 'Packages',
            component: <Packages />,
            nested: {
                uiComponentPackage: {
                    route: 'ui-component-package',
                    name: 'Ui Component Package',
                    component: <UiComponentPackage />,
                    nested: {
                        blueprintJsType: {
                            route: 'blueprint-js-type',
                            name: 'Blueprint Js Type',
                            component: <BlueprintJsType />
                        },
                        spectrumWebComponentsType: {
                            route: 'spectrum-web-components-type',
                            name: 'Spectrum Web Components Type',
                            component: <SpectrumWebComponentsType />
                        },
                        chakraUiType: {
                            route: 'chakra-ui-type',
                            name: 'Chakra Ui Type',
                            component: <ChakraUiType />
                        },
                        fluentUiType: {
                            route: 'fluent-ui-type',
                            name: 'Fluent Ui Type',
                            component: <FluentUiType />
                        },
                        semanticUiReactType: {
                            route: 'semantic-ui-react-type',
                            name: 'Semantic Ui React Type',
                            component: <SemanticUiReactType />
                        },
                        antDesignType: {
                            route: 'ant-design-type',
                            name: 'Ant Design Type',
                            component: <AntDesignType />
                        },
                        materialUiType: {
                            route: 'material-ui-type',
                            name: 'Material Ui Type',
                            component: <MaterialUiType />
                        },
                        primereactType: {
                            route: 'primereact-type',
                            name: 'Primereact Type',
                            component: <PrimereactType />
                        },
                        uiBootstrap: {
                            route: 'ui-bootstrap',
                            name: 'Ui Bootstra',
                            component: <UiBootstrap />
                        },
                    }
                },
                chartPackage: {
                    route: 'chart-package',
                    name: 'Chart Package',
                    component: <ChartPackage />,
                    nested: {
                        apexChartsType: {
                            route: 'apex-charts-type',
                            name: 'Apex Charts Type',
                            component: <ApexChartsType />
                        },
                        nivoType: {
                            route: 'nivo-type',
                            name: 'Nivo Type',
                            component: <NivoType />
                        },
                        highchartsType: {
                            route: 'highcharts-type',
                            name: 'Highcharts Type',
                            component: <HighchartsType />
                        },
                        googleChartsType: {
                            route: 'google-charts-type',
                            name: 'Google Charts Type',
                            component: <GoogleChartsType />
                        },
                        victoryType: {
                            route: 'victory-type',
                            name: 'Victory Type',
                            component: <VictoryType />
                        },
                        rechartsType: {
                            route: 'recharts-type',
                            name: 'Recharts Type',
                            component: <RechartsType />
                        },
                        reactChartJsType: {
                            route: 'react-chart-js-type',
                            name: 'React Chart Js Type',
                            component: <ReactChartJsType />
                        },
                    }
                },
                loaderProgressPackage: {
                    route: 'loader-progress-package',
                    name: 'Loader Progress Package',
                    component: <LoaderProgressPackage />,
                    nested: {
                        reactTopLoadingBarType: {
                            route: 'react-top-loading-bar-type',
                            name: 'React Top Loading Bar Type',
                            component: <ReactTopLoadingBarType />
                        },
                        reactCircularProgressbarType: {
                            route: 'react-circular-progressbar-type',
                            name: 'React Circular Progressbar Type',
                            component: <ReactCircularProgressbarType />
                        },
                        rcProgressType: {
                            route: 'rc-progress-type',
                            name: 'RC Progress Type',
                            component: <RcProgressType />
                        },
                        respinnerType: {
                            route: 'respinner-type',
                            name: 'Respinner Type',
                            component: <RespinnerType />
                        },
                        spinnersReactType: {
                            route: 'spinners-react-type',
                            name: 'Spinners React Type',
                            component: <SpinnersReactType />
                        },
                        reactSpinnersType: {
                            route: 'react-spinners-type',
                            name: 'React Spinners Type',
                            component: <ReactSpinnersType />
                        },
                        reactLoaderSpinnerType: {
                            route: 'react-loader-spinner-type',
                            name: 'React Loader Spinner Type',
                            component: <ReactLoaderSpinnerType />
                        },
                    }
                },
                layoutStylingPackage: {
                    route: 'layout-styling-package',
                    name: 'Layout Styling Package',
                    component: <LayoutStylingPackage />,
                    nested: {
                        reactGridLayoutType: {
                            route: 'react-grid-layout-type',
                            name: 'React Grid Layout Type',
                            component: <ReactGridLayoutType />
                        },
                        chromaJsType: {
                            route: 'chromaJs-type',
                            name: 'Chroma Js Type',
                            component: <ChromaJsType />
                        },
                        tailwindType: {
                            route: 'tailwind-type',
                            name: 'Tailwind Type',
                            component: <TailwindType />
                        },
                        styleBootstrapType: {
                            route: 'style-bootstrap-type',
                            name: 'Style Bootstrap Type',
                            component: <StyleBootstrapType />
                        },
                        styledComponentsType: {
                            route: 'styled-components-type',
                            name: 'Styled Components Type',
                            component: <StyledComponentsType />
                        },
                    }
                },
                animationPackage: {
                    route: 'animation-package',
                    name: 'Animation Package',
                    component: <AnimationPackage />,
                    nested: {
                        animeJsType: {
                            route: 'anime-js-type',
                            name: 'Anime Js Type',
                            component: <AnimeJsType />
                        },
                        framerMotionType: {
                            route: 'framer-motion-type',
                            name: 'Framer Motion Type',
                            component: <FramerMotionType />
                        },
                        reactSpringType: {
                            route: 'react-spring-type',
                            name: 'React Spring Type',
                            component: <ReactSpringType />
                        },
                        animateType: {
                            route: 'animate-type',
                            name: 'Animate Type',
                            component: <AnimateType />
                        },
                    }
                },
                pageScrollPackage: {
                    route: 'page-scroll-package',
                    name: 'Pag eScroll Package',
                    component: <PageScrollPackage />,
                    nested: {
                        reactScrollType: {
                            route: 'react-scroll-type',
                            name: 'React Scroll Type',
                            component: <ReactScrollType />
                        },
                        smoothScrollbarType: {
                            route: 'smooth-scrollbar-type',
                            name: 'Smooth Scrollbar Type',
                            component: <SmoothScrollbarType />
                        },
                        intersectionObserverType: {
                            route: 'intersection-observer-type',
                            name: 'Intersection Observer Type',
                            component: <IntersectionObserverType />
                        },
                    }
                },
                someUsefulPackage: {
                    route: 'some-useful-package',
                    name: 'Some Useful Package',
                    component: <SomeUsefulPackage />,
                    nested: {
                        fakerJsType: {
                            route: 'faker-js-type',
                            name: 'Faker Js Type',
                            component: <FakerJsType />
                        },
                        logSymbolsType: {
                            route: 'log-symbols-type',
                            name: 'Log Symbols Type',
                            component: <LogSymbolsType />
                        },
                    }
                },
                tostAlertPackage: {
                    route: 'tost-alert-package',
                    name: 'Tost Alert Package',
                    component: <TostAlertPackage />,
                    nested: {
                        toastifyType: {
                            route: 'toastify-type',
                            name: 'ToastifyT ype',
                            component: <ToastifyType />
                        },
                        sweetAlertType: {
                            route: 'sweet-alert-type',
                            name: 'Sweet Alert Type',
                            component: <SweetAlertType />
                        },
                    }
                },
                dateTimePackage: {
                    route: 'date-time-package',
                    name: 'Date Time Package',
                    component: <DateTimePackage />,
                    nested: {
                        luxonType: {
                            route: 'luxon-type',
                            name: ' Luxon Type',
                            component: < LuxonType />
                        },
                        momentType: {
                            route: 'moment-type',
                            name: ' Moment Type',
                            component: < MomentType />
                        },
                    }
                },
                paginationPackage: {
                    route: 'pagination-package',
                    name: 'Pagination Package',
                    component: <PaginationPackage />,
                    nested: {
                        reactPaginateType: {
                            route: 'react-paginate-type',
                            name: 'React Paginate Type',
                            component: <ReactPaginateType />
                        },
                    }
                },
                iconPackage: {
                    route: 'icon-package',
                    name: 'Icon Package',
                    component: <IconPackage />,
                    nested: {
                        reactIconType: {
                            route: 'react-icon-type',
                            name: 'React Icon Type',
                            component: <ReactIconType />
                        },
                    }
                },
                inputFormPackage: {
                    route: 'input-form-package',
                    name: 'Input Form Package',
                    component: <InputFormPackage />,
                    nested: {
                        reactSelectType: {
                            route: 'react-select-type',
                            name: 'React Select Type',
                            component: <ReactSelectType />
                        },
                    }
                },
            }
        }
    }
}