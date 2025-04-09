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

export const getPackagesRouteData = (dataPass: any) => {
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
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                                icons: {
                                    type: 'icons',
                                    name: 'Icons',
                                },
                                datetime2: {
                                    type: 'datetime2',
                                    name: 'Datetime2',
                                },
                                select: {
                                    type: 'select',
                                    name: 'Select',
                                },
                                table: {
                                    type: 'table',
                                    name: 'Table',
                                },
                            },
                            component: <BlueprintJsType />
                        },
                        spectrumWebComponentsType: {
                            route: 'spectrum-web-components-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                                icons: {
                                    type: 'icons',
                                    name: 'Icons',
                                },
                            },
                            info: {
                                name: 'Spectrum Web Components',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <SpectrumWebComponentsType />
                        },
                        chakraUiType: {
                            route: 'chakra-ui-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Chakra Ui',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ChakraUiType />
                        },
                        fluentUiType: {
                            route: 'fluent-ui-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Fluent Ui',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <FluentUiType />
                        },
                        semanticUiReactType: {
                            route: 'semantic-ui-react-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Semantic Ui React',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <SemanticUiReactType />
                        },
                        antDesignType: {
                            route: 'ant-design-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Ant Design',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <AntDesignType />
                        },
                        materialUiType: {
                            route: 'material-ui-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                                icons: {
                                    type: 'icons',
                                    name: 'Icons',
                                },
                                fonts: {
                                    type: 'fonts',
                                    name: 'Fonts',
                                },
                            },
                            info: {
                                name: 'Material Ui',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <MaterialUiType />
                        },
                        primereactType: {
                            route: 'primereact-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                                icons: {
                                    type: 'icons',
                                    name: 'Icons',
                                },
                            },
                            info: {
                                name: 'Primereact',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <PrimereactType />
                        },
                        uiBootstrap: {
                            route: 'ui-bootstrap',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
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
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Apex Charts',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ApexChartsType />
                        },
                        nivoType: {
                            route: 'nivo-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Nivo',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <NivoType />
                        },
                        highchartsType: {
                            route: 'highcharts-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Highcharts',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <HighchartsType />
                        },
                        googleChartsType: {
                            route: 'google-charts-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Google Charts',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <GoogleChartsType />
                        },
                        victoryType: {
                            route: 'victory-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Victory',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <VictoryType />
                        },
                        rechartsType: {
                            route: 'recharts-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Recharts',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <RechartsType />
                        },
                        reactChartJsType: {
                            route: 'react-chart-js-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
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
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'React Top Loading Bar',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactTopLoadingBarType />
                        },
                        reactCircularProgressbarType: {
                            route: 'react-circular-progressbar-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'React Circular Progressbar',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactCircularProgressbarType />
                        },
                        rcProgressType: {
                            route: 'rc-progress-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'RC Progress',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <RcProgressType />
                        },
                        respinnerType: {
                            route: 'respinner-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Respinner',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <RespinnerType />
                        },
                        spinnersReactType: {
                            route: 'spinners-react-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Spinners React',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <SpinnersReactType />
                        },
                        reactSpinnersType: {
                            route: 'react-spinners-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'React Spinners',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactSpinnersType />
                        },
                        reactLoaderSpinnerType: {
                            route: 'react-loader-spinner-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
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
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'React Grid Layout',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactGridLayoutType />
                        },
                        chromaJsType: {
                            route: 'chromaJs-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Chroma Js',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ChromaJsType />
                        },
                        tailwindType: {
                            route: 'tailwind-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Tailwind',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <TailwindType />
                        },
                        styleBootstrapType: {
                            route: 'style-bootstrap-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Style Bootstrap',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <StyleBootstrapType />
                        },
                        styledComponentsType: {
                            route: 'styled-components-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
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
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Anime Js',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <AnimeJsType />
                        },
                        framerMotionType: {
                            route: 'framer-motion-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Framer Motion',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <FramerMotionType />
                        },
                        reactSpringType: {
                            route: 'react-spring-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'React Spring',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactSpringType />
                        },
                        animateType: {
                            route: 'animate-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
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
                        name: 'Page Scroll Package',
                        about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                    },
                    component: <PageScrollPackage />,
                    nested: {
                        reactScrollType: {
                            route: 'react-scroll-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'React Scroll',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ReactScrollType />
                        },
                        smoothScrollbarType: {
                            route: 'smooth-scrollbar-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Smooth Scrollbar',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <SmoothScrollbarType />
                        },
                        intersectionObserverType: {
                            route: 'intersection-observer-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
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
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Faker Js',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <FakerJsType />
                        },
                        logSymbolsType: {
                            route: 'log-symbols-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
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
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: 'Toastify',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: <ToastifyType />
                        },
                        sweetAlertType: {
                            route: 'sweet-alert-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
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
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
                            info: {
                                name: ' Luxon',
                                about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore repudiandae veniam, neque nemo minus quam beatae quis illo non quisquam pariatur harum corporis veritatis perferendis autem quas! Libero, voluptatibus."
                            },
                            component: < LuxonType />
                        },
                        momentType: {
                            route: 'moment-type',
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                                timezone: {
                                    type: 'timezone',
                                    name: 'Time Zone',
                                },
                            },
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
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
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
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
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
                            packagesUsed: {
                                core: {
                                    type: 'core',
                                    name: 'Core',
                                },
                            },
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