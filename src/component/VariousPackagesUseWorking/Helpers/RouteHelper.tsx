import { Layout } from "../Layout/Layout";
import { useHelper } from "../Hooks/useHelper";
import { Packages } from "../Component/Packages/Packages"
import { ErrorPage } from "../Component/ErrorPage/ErrorPage";
import { Home } from "../Component/Home/Home";
import { PackagesContextProvider } from "../Context/PackagesContext";
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
            info: {
                name: 'Packages',
                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
            },
            component: <Packages />,
            nested: {
                uiComponentPackage: {
                    route: 'ui-component-package',
                    info: {
                        name: 'Ui Component Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <UiComponentPackage />,
                    nested: {
                        blueprintJsType: {
                            route: 'blueprint-js-type',
                            info: {
                                name: 'Blueprint Js',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <BlueprintJsType />
                        },
                        spectrumWebComponentsType: {
                            route: 'spectrum-web-components-type',
                            info: {
                                name: 'Spectrum Web Components',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <SpectrumWebComponentsType />
                        },
                        chakraUiType: {
                            route: 'chakra-ui-type',
                            info: {
                                name: 'Chakra Ui',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ChakraUiType />
                        },
                        fluentUiType: {
                            route: 'fluent-ui-type',
                            info: {
                                name: 'Fluent Ui',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <FluentUiType />
                        },
                        semanticUiReactType: {
                            route: 'semantic-ui-react-type',
                            info: {
                                name: 'Semantic Ui React',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <SemanticUiReactType />
                        },
                        antDesignType: {
                            route: 'ant-design-type',
                            info: {
                                name: 'Ant Design',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <AntDesignType />
                        },
                        materialUiType: {
                            route: 'material-ui-type',
                            info: {
                                name: 'Material Ui',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <MaterialUiType />
                        },
                        primereactType: {
                            route: 'primereact-type',
                            info: {
                                name: 'Primereact',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <PrimereactType />
                        },
                        uiBootstrap: {
                            route: 'ui-bootstrap',
                            info: {
                                name: 'Ui Bootstra',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <UiBootstrap />
                        },
                    }
                },
                chartPackage: {
                    route: 'chart-package',
                    info: {
                        name: 'Chart Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <ChartPackage />,
                    nested: {
                        apexChartsType: {
                            route: 'apex-charts-type',
                            info: {
                                name: 'Apex Charts',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ApexChartsType />
                        },
                        nivoType: {
                            route: 'nivo-type',
                            info: {
                                name: 'Nivo',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <NivoType />
                        },
                        highchartsType: {
                            route: 'highcharts-type',
                            info: {
                                name: 'Highcharts',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <HighchartsType />
                        },
                        googleChartsType: {
                            route: 'google-charts-type',
                            info: {
                                name: 'Google Charts',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <GoogleChartsType />
                        },
                        victoryType: {
                            route: 'victory-type',
                            info: {
                                name: 'Victory',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <VictoryType />
                        },
                        rechartsType: {
                            route: 'recharts-type',
                            info: {
                                name: 'Recharts',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <RechartsType />
                        },
                        reactChartJsType: {
                            route: 'react-chart-js-type',
                            info: {
                                name: 'React Chart Js',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactChartJsType />
                        },
                    }
                },
                loaderProgressPackage: {
                    route: 'loader-progress-package',
                    info: {
                        name: 'Loader Progress Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <LoaderProgressPackage />,
                    nested: {
                        reactTopLoadingBarType: {
                            route: 'react-top-loading-bar-type',
                            info: {
                                name: 'React Top Loading Bar',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactTopLoadingBarType />
                        },
                        reactCircularProgressbarType: {
                            route: 'react-circular-progressbar-type',
                            info: {
                                name: 'React Circular Progressbar',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactCircularProgressbarType />
                        },
                        rcProgressType: {
                            route: 'rc-progress-type',
                            info: {
                                name: 'RC Progress',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <RcProgressType />
                        },
                        respinnerType: {
                            route: 'respinner-type',
                            info: {
                                name: 'Respinner',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <RespinnerType />
                        },
                        spinnersReactType: {
                            route: 'spinners-react-type',
                            info: {
                                name: 'Spinners React',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <SpinnersReactType />
                        },
                        reactSpinnersType: {
                            route: 'react-spinners-type',
                            info: {
                                name: 'React Spinners',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactSpinnersType />
                        },
                        reactLoaderSpinnerType: {
                            route: 'react-loader-spinner-type',
                            info: {
                                name: 'React Loader Spinner',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactLoaderSpinnerType />
                        },
                    }
                },
                layoutStylingPackage: {
                    route: 'layout-styling-package',
                    info: {
                        name: 'Layout Styling Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <LayoutStylingPackage />,
                    nested: {
                        reactGridLayoutType: {
                            route: 'react-grid-layout-type',
                            info: {
                                name: 'React Grid Layout',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactGridLayoutType />
                        },
                        chromaJsType: {
                            route: 'chromaJs-type',
                            info: {
                                name: 'Chroma Js',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ChromaJsType />
                        },
                        tailwindType: {
                            route: 'tailwind-type',
                            info: {
                                name: 'Tailwind',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <TailwindType />
                        },
                        styleBootstrapType: {
                            route: 'style-bootstrap-type',
                            info: {
                                name: 'Style Bootstrap',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <StyleBootstrapType />
                        },
                        styledComponentsType: {
                            route: 'styled-components-type',
                            info: {
                                name: 'Styled Components',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <StyledComponentsType />
                        },
                    }
                },
                animationPackage: {
                    route: 'animation-package',
                    info: {
                        name: 'Animation Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <AnimationPackage />,
                    nested: {
                        animeJsType: {
                            route: 'anime-js-type',
                            info: {
                                name: 'Anime Js',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <AnimeJsType />
                        },
                        framerMotionType: {
                            route: 'framer-motion-type',
                            info: {
                                name: 'Framer Motion',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <FramerMotionType />
                        },
                        reactSpringType: {
                            route: 'react-spring-type',
                            info: {
                                name: 'React Spring',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactSpringType />
                        },
                        animateType: {
                            route: 'animate-type',
                            info: {
                                name: 'Animate',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <AnimateType />
                        },
                    }
                },
                pageScrollPackage: {
                    route: 'page-scroll-package',
                    info: {
                        name: 'Pag eScroll Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <PageScrollPackage />,
                    nested: {
                        reactScrollType: {
                            route: 'react-scroll-type',
                            info: {
                                name: 'React Scroll',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactScrollType />
                        },
                        smoothScrollbarType: {
                            route: 'smooth-scrollbar-type',
                            info: {
                                name: 'Smooth Scrollbar',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <SmoothScrollbarType />
                        },
                        intersectionObserverType: {
                            route: 'intersection-observer-type',
                            info: {
                                name: 'Intersection Observer',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <IntersectionObserverType />
                        },
                    }
                },
                someUsefulPackage: {
                    route: 'some-useful-package',
                    info: {
                        name: 'Some Useful Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <SomeUsefulPackage />,
                    nested: {
                        fakerJsType: {
                            route: 'faker-js-type',
                            info: {
                                name: 'Faker Js',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <FakerJsType />
                        },
                        logSymbolsType: {
                            route: 'log-symbols-type',
                            info: {
                                name: 'Log Symbols',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <LogSymbolsType />
                        },
                    }
                },
                tostAlertPackage: {
                    route: 'tost-alert-package',
                    info: {
                        name: 'Tost Alert Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <TostAlertPackage />,
                    nested: {
                        toastifyType: {
                            route: 'toastify-type',
                            info: {
                                name: 'Toastify',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ToastifyType />
                        },
                        sweetAlertType: {
                            route: 'sweet-alert-type',
                            info: {
                                name: 'Sweet Alert',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <SweetAlertType />
                        },
                    }
                },
                dateTimePackage: {
                    route: 'date-time-package',
                    info: {
                        name: 'Date Time Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <DateTimePackage />,
                    nested: {
                        luxonType: {
                            route: 'luxon-type',
                            info: {
                                name: ' Luxon',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: < LuxonType />
                        },
                        momentType: {
                            route: 'moment-type',
                            info: {
                                name: ' Moment',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: < MomentType />
                        },
                    }
                },
                paginationPackage: {
                    route: 'pagination-package',
                    info: {
                        name: 'Pagination Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <PaginationPackage />,
                    nested: {
                        reactPaginateType: {
                            route: 'react-paginate-type',
                            info: {
                                name: 'React Paginate',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactPaginateType />
                        },
                    }
                },
                iconPackage: {
                    route: 'icon-package',
                    info: {
                        name: 'Icon Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <IconPackage />,
                    nested: {
                        reactIconType: {
                            route: 'react-icon-type',
                            info: {
                                name: 'React Icon',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactIconType />
                        },
                    }
                },
                inputFormPackage: {
                    route: 'input-form-package',
                    info: {
                        name: 'Input Form Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <InputFormPackage />,
                    nested: {
                        reactSelectType: {
                            route: 'react-select-type',
                            info: {
                                name: 'React Select',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactSelectType />
                        },
                    }
                },
            }
        }
    }
}

export const getRouteLink = (dataPass: any) => {
    const routePaths = getRouteData({})
    return {
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
                    <Packages />
                </PackagesContextProvider>,
                children: [
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.uiComponentPackage.route,
                            ]
                        }),
                        element: <UiComponentPackage />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.uiComponentPackage.route,
                                        routePaths.packages.nested.uiComponentPackage.nested.blueprintJsType.route
                                    ]
                                }),
                                element: <BlueprintJsType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.uiComponentPackage.route,
                                        routePaths.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.route
                                    ]
                                }),
                                element: <SpectrumWebComponentsType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.uiComponentPackage.route,
                                        routePaths.packages.nested.uiComponentPackage.nested.chakraUiType.route
                                    ]
                                }),
                                element: <ChakraUiType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.uiComponentPackage.route,
                                        routePaths.packages.nested.uiComponentPackage.nested.fluentUiType.route
                                    ]
                                }),
                                element: <FluentUiType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.uiComponentPackage.route,
                                        routePaths.packages.nested.uiComponentPackage.nested.semanticUiReactType.route
                                    ]
                                }),
                                element: <SemanticUiReactType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.uiComponentPackage.route,
                                        routePaths.packages.nested.uiComponentPackage.nested.antDesignType.route
                                    ]
                                }),
                                element: <AntDesignType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.uiComponentPackage.route,
                                        routePaths.packages.nested.uiComponentPackage.nested.materialUiType.route
                                    ]
                                }),
                                element: <MaterialUiType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.uiComponentPackage.route,
                                        routePaths.packages.nested.uiComponentPackage.nested.primereactType.route
                                    ]
                                }),
                                element: <PrimereactType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.uiComponentPackage.route,
                                        routePaths.packages.nested.uiComponentPackage.nested.uiBootstrap.route
                                    ]
                                }),
                                element: <UiBootstrap />
                            }
                        ]
                    },
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.chartPackage.route,
                            ]
                        }),
                        element: <ChartPackage />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.chartPackage.route,
                                        routePaths.packages.nested.chartPackage.nested.apexChartsType.route
                                    ]
                                }),
                                element: <ApexChartsType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.chartPackage.route,
                                        routePaths.packages.nested.chartPackage.nested.nivoType.route
                                    ]
                                }),
                                element: <NivoType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.chartPackage.route,
                                        routePaths.packages.nested.chartPackage.nested.highchartsType.route
                                    ]
                                }),
                                element: <HighchartsType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.chartPackage.route,
                                        routePaths.packages.nested.chartPackage.nested.googleChartsType.route
                                    ]
                                }),
                                element: <GoogleChartsType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.chartPackage.route,
                                        routePaths.packages.nested.chartPackage.nested.victoryType.route
                                    ]
                                }),
                                element: <VictoryType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.chartPackage.route,
                                        routePaths.packages.nested.chartPackage.nested.rechartsType.route
                                    ]
                                }),
                                element: <RechartsType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.chartPackage.route,
                                        routePaths.packages.nested.chartPackage.nested.reactChartJsType.route
                                    ]
                                }),
                                element: <ReactChartJsType />
                            }
                        ]
                    },
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.inputFormPackage.route,
                            ]
                        }),
                        element: <LoaderProgressPackage />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.inputFormPackage.route,
                                        routePaths.packages.nested.inputFormPackage.nested.reactSelectType.route
                                    ]
                                }),
                                element: <ReactTopLoadingBarType />
                            }
                        ]
                    },
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.someUsefulPackage.route
                            ]
                        }),
                        element: <ReactCircularProgressbarType />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.someUsefulPackage.route,
                                        routePaths.packages.nested.someUsefulPackage.nested.fakerJsType.route
                                    ]
                                }),
                                element: <RcProgressType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.someUsefulPackage.route,
                                        routePaths.packages.nested.someUsefulPackage.nested.logSymbolsType.route
                                    ]
                                }),
                                element: <RespinnerType />
                            }
                        ]
                    },
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.layoutStylingPackage.route
                            ]
                        }),
                        element: <SpinnersReactType />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.layoutStylingPackage.route,
                                        routePaths.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.route
                                    ]
                                }),
                                element: <ReactSpinnersType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.layoutStylingPackage.route,
                                        routePaths.packages.nested.layoutStylingPackage.nested.chromaJsType.route
                                    ]
                                }),
                                element: <ReactLoaderSpinnerType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.layoutStylingPackage.route,
                                        routePaths.packages.nested.layoutStylingPackage.nested.tailwindType.route
                                    ]
                                }),
                                element: <LayoutStylingPackage />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.layoutStylingPackage.route,
                                        routePaths.packages.nested.layoutStylingPackage.nested.styleBootstrapType.route
                                    ]
                                }),
                                element: <ReactGridLayoutType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.layoutStylingPackage.route,
                                        routePaths.packages.nested.layoutStylingPackage.nested.styledComponentsType.route
                                    ]
                                }),
                                element: <ChromaJsType />
                            }
                        ]
                    },
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.animationPackage.route,
                            ]
                        }),
                        element: <TailwindType />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.animationPackage.route,
                                        routePaths.packages.nested.animationPackage.nested.animeJsType.route
                                    ]
                                }),
                                element: <StyleBootstrapType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.animationPackage.route,
                                        routePaths.packages.nested.animationPackage.nested.framerMotionType.route
                                    ]
                                }),
                                element: <StyledComponentsType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.animationPackage.route,
                                        routePaths.packages.nested.animationPackage.nested.reactSpringType.route
                                    ]
                                }),
                                element: <AnimationPackage />,
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.animationPackage.route,
                                        routePaths.packages.nested.animationPackage.nested.animateType.route
                                    ]
                                }),
                                element: <AnimeJsType />
                            }
                        ]
                    },
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.pageScrollPackage.route,
                            ]
                        }),
                        element: <FramerMotionType />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.pageScrollPackage.route,
                                        routePaths.packages.nested.pageScrollPackage.nested.reactScrollType.route
                                    ]
                                }),
                                element: <ReactSpringType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.pageScrollPackage.route,
                                        routePaths.packages.nested.pageScrollPackage.nested.smoothScrollbarType.route
                                    ]
                                }),
                                element: <AnimateType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.pageScrollPackage.route,
                                        routePaths.packages.nested.pageScrollPackage.nested.intersectionObserverType.route
                                    ]
                                }),
                                element: <PageScrollPackage />,
                            }
                        ]
                    },
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.tostAlertPackage.route,
                            ]
                        }),
                        element: <ReactScrollType />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.tostAlertPackage.route,
                                        routePaths.packages.nested.tostAlertPackage.nested.toastifyType.route
                                    ]
                                }),
                                element: <SmoothScrollbarType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.tostAlertPackage.route,
                                        routePaths.packages.nested.tostAlertPackage.nested.sweetAlertType.route
                                    ]
                                }),
                                element: <IntersectionObserverType />
                            }
                        ]
                    },
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.dateTimePackage.route,
                            ]
                        }),
                        element: <SomeUsefulPackage />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.dateTimePackage.route,
                                        routePaths.packages.nested.dateTimePackage.nested.luxonType.route
                                    ]
                                }),
                                element: <FakerJsType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.dateTimePackage.route,
                                        routePaths.packages.nested.dateTimePackage.nested.momentType.route
                                    ]
                                }),
                                element: <LogSymbolsType />
                            }
                        ]
                    },
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.paginationPackage.route,
                            ]
                        }),
                        element: <TostAlertPackage />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.paginationPackage.route,
                                        routePaths.packages.nested.paginationPackage.nested.reactPaginateType.route
                                    ]
                                }),
                                element: <ToastifyType />
                            }
                        ]
                    },
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.loaderProgressPackage.route
                            ]
                        }),
                        element: <SweetAlertType />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.loaderProgressPackage.route,
                                        routePaths.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.route
                                    ]
                                }),
                                element: <DateTimePackage />,
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.loaderProgressPackage.route,
                                        routePaths.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.route
                                    ]
                                }),
                                element: < LuxonType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.loaderProgressPackage.route,
                                        routePaths.packages.nested.loaderProgressPackage.nested.rcProgressType.route
                                    ]
                                }),
                                element: < MomentType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.loaderProgressPackage.route,
                                        routePaths.packages.nested.loaderProgressPackage.nested.respinnerType.route
                                    ]
                                }),
                                element: <PaginationPackage />,
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.loaderProgressPackage.route,
                                        routePaths.packages.nested.loaderProgressPackage.nested.spinnersReactType.route
                                    ]
                                }),
                                element: <ReactPaginateType />
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.loaderProgressPackage.route,
                                        routePaths.packages.nested.loaderProgressPackage.nested.reactSpinnersType.route
                                    ]
                                }),
                                element: <IconPackage />,
                            },
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.loaderProgressPackage.route,
                                        routePaths.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.route
                                    ]
                                }),
                                element: <ReactIconType />
                            }
                        ]
                    },
                    {
                        path: useHelper({
                            type: 'routeConcatenate', data: [
                                routePaths.packages.route,
                                routePaths.packages.nested.iconPackage.route,
                            ]
                        }),
                        element: <InputFormPackage />,
                        children: [
                            {
                                path: useHelper({
                                    type: 'routeConcatenate', data: [
                                        routePaths.packages.route,
                                        routePaths.packages.nested.iconPackage.route,
                                        routePaths.packages.nested.iconPackage.nested.reactIconType.route
                                    ]
                                }),
                                element: <ReactSelectType />
                            }
                        ]
                    }
                ]
            }
        ]
    }
}