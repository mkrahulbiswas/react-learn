import { getPackagesRouteData } from "./PackagesRouteData";

export const getPackagesRouteLoader = async (dataPass: any) => {
    const packagesRouteData = getPackagesRouteData({})
    let returnData: any = []
    try {
        if (dataPass.type === packagesRouteData.packages.route) {
            returnData = {
                route: packagesRouteData.packages.route,
                info: {
                    name: packagesRouteData.packages.info.name,
                    about: packagesRouteData.packages.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.uiComponentPackage.route,
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.blueprintJsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.uiComponentPackage.nested.blueprintJsType.route,
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.blueprintJsType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.blueprintJsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.route,
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.chakraUiType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.uiComponentPackage.nested.chakraUiType.route,
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.chakraUiType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.chakraUiType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.fluentUiType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.uiComponentPackage.nested.fluentUiType.route,
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.fluentUiType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.fluentUiType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.semanticUiReactType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.uiComponentPackage.nested.semanticUiReactType.route,
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.semanticUiReactType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.semanticUiReactType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.antDesignType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.uiComponentPackage.nested.antDesignType.route,
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.antDesignType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.antDesignType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.materialUiType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.uiComponentPackage.nested.materialUiType.route,
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.materialUiType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.materialUiType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.primereactType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.uiComponentPackage.nested.primereactType.route,
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.primereactType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.primereactType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.uiBootstrap.route) {
            returnData = {
                route: packagesRouteData.packages.nested.uiComponentPackage.nested.uiBootstrap.route,
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.uiBootstrap.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.uiBootstrap.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.chartPackage.route,
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.apexChartsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.chartPackage.nested.apexChartsType.route,
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.apexChartsType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.apexChartsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.nivoType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.chartPackage.nested.nivoType.route,
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.nivoType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.nivoType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.highchartsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.chartPackage.nested.highchartsType.route,
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.highchartsType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.highchartsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.googleChartsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.chartPackage.nested.googleChartsType.route,
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.googleChartsType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.googleChartsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.victoryType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.chartPackage.nested.victoryType.route,
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.victoryType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.victoryType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.rechartsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.chartPackage.nested.rechartsType.route,
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.rechartsType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.rechartsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.reactChartJsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.chartPackage.nested.reactChartJsType.route,
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.reactChartJsType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.reactChartJsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.inputFormPackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.inputFormPackage.route,
                info: {
                    name: packagesRouteData.packages.nested.inputFormPackage.info.name,
                    about: packagesRouteData.packages.nested.inputFormPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.inputFormPackage.nested.reactSelectType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.inputFormPackage.nested.reactSelectType.route,
                info: {
                    name: packagesRouteData.packages.nested.inputFormPackage.nested.reactSelectType.info.name,
                    about: packagesRouteData.packages.nested.inputFormPackage.nested.reactSelectType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.someUsefulPackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.someUsefulPackage.route,
                info: {
                    name: packagesRouteData.packages.nested.someUsefulPackage.info.name,
                    about: packagesRouteData.packages.nested.someUsefulPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.someUsefulPackage.nested.fakerJsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.someUsefulPackage.nested.fakerJsType.route,
                info: {
                    name: packagesRouteData.packages.nested.someUsefulPackage.nested.fakerJsType.info.name,
                    about: packagesRouteData.packages.nested.someUsefulPackage.nested.fakerJsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.someUsefulPackage.nested.logSymbolsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.someUsefulPackage.nested.logSymbolsType.route,
                info: {
                    name: packagesRouteData.packages.nested.someUsefulPackage.nested.logSymbolsType.info.name,
                    about: packagesRouteData.packages.nested.someUsefulPackage.nested.logSymbolsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.layoutStylingPackage.route,
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.route,
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.nested.chromaJsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.layoutStylingPackage.nested.chromaJsType.route,
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.nested.chromaJsType.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.nested.chromaJsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.nested.tailwindType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.layoutStylingPackage.nested.tailwindType.route,
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.nested.tailwindType.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.nested.tailwindType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.nested.styleBootstrapType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.layoutStylingPackage.nested.styleBootstrapType.route,
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.nested.styleBootstrapType.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.nested.styleBootstrapType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.nested.styledComponentsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.layoutStylingPackage.nested.styledComponentsType.route,
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.nested.styledComponentsType.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.nested.styledComponentsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.animationPackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.animationPackage.route,
                info: {
                    name: packagesRouteData.packages.nested.animationPackage.info.name,
                    about: packagesRouteData.packages.nested.animationPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.animationPackage.nested.animeJsType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.animationPackage.nested.animeJsType.route,
                info: {
                    name: packagesRouteData.packages.nested.animationPackage.nested.animeJsType.info.name,
                    about: packagesRouteData.packages.nested.animationPackage.nested.animeJsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.animationPackage.nested.framerMotionType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.animationPackage.nested.framerMotionType.route,
                info: {
                    name: packagesRouteData.packages.nested.animationPackage.nested.framerMotionType.info.name,
                    about: packagesRouteData.packages.nested.animationPackage.nested.framerMotionType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.animationPackage.nested.reactSpringType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.animationPackage.nested.reactSpringType.route,
                info: {
                    name: packagesRouteData.packages.nested.animationPackage.nested.reactSpringType.info.name,
                    about: packagesRouteData.packages.nested.animationPackage.nested.reactSpringType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.animationPackage.nested.animateType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.animationPackage.nested.animateType.route,
                info: {
                    name: packagesRouteData.packages.nested.animationPackage.nested.animateType.info.name,
                    about: packagesRouteData.packages.nested.animationPackage.nested.animateType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.pageScrollPackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.pageScrollPackage.route,
                info: {
                    name: packagesRouteData.packages.nested.pageScrollPackage.info.name,
                    about: packagesRouteData.packages.nested.pageScrollPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.pageScrollPackage.nested.reactScrollType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.pageScrollPackage.nested.reactScrollType.route,
                info: {
                    name: packagesRouteData.packages.nested.pageScrollPackage.nested.reactScrollType.info.name,
                    about: packagesRouteData.packages.nested.pageScrollPackage.nested.reactScrollType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.pageScrollPackage.nested.smoothScrollbarType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.pageScrollPackage.nested.smoothScrollbarType.route,
                info: {
                    name: packagesRouteData.packages.nested.pageScrollPackage.nested.smoothScrollbarType.info.name,
                    about: packagesRouteData.packages.nested.pageScrollPackage.nested.smoothScrollbarType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.pageScrollPackage.nested.intersectionObserverType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.pageScrollPackage.nested.intersectionObserverType.route,
                info: {
                    name: packagesRouteData.packages.nested.pageScrollPackage.nested.intersectionObserverType.info.name,
                    about: packagesRouteData.packages.nested.pageScrollPackage.nested.intersectionObserverType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.tostAlertPackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.tostAlertPackage.route,
                info: {
                    name: packagesRouteData.packages.nested.tostAlertPackage.info.name,
                    about: packagesRouteData.packages.nested.tostAlertPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.tostAlertPackage.nested.toastifyType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.tostAlertPackage.nested.toastifyType.route,
                info: {
                    name: packagesRouteData.packages.nested.tostAlertPackage.nested.toastifyType.info.name,
                    about: packagesRouteData.packages.nested.tostAlertPackage.nested.toastifyType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.tostAlertPackage.nested.sweetAlertType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.tostAlertPackage.nested.sweetAlertType.route,
                info: {
                    name: packagesRouteData.packages.nested.tostAlertPackage.nested.sweetAlertType.info.name,
                    about: packagesRouteData.packages.nested.tostAlertPackage.nested.sweetAlertType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.dateTimePackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.dateTimePackage.route,
                info: {
                    name: packagesRouteData.packages.nested.dateTimePackage.info.name,
                    about: packagesRouteData.packages.nested.dateTimePackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.dateTimePackage.nested.luxonType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.dateTimePackage.nested.luxonType.route,
                info: {
                    name: packagesRouteData.packages.nested.dateTimePackage.nested.luxonType.info.name,
                    about: packagesRouteData.packages.nested.dateTimePackage.nested.luxonType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.dateTimePackage.nested.momentType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.dateTimePackage.nested.momentType.route,
                info: {
                    name: packagesRouteData.packages.nested.dateTimePackage.nested.momentType.info.name,
                    about: packagesRouteData.packages.nested.dateTimePackage.nested.momentType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.paginationPackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.paginationPackage.route,
                info: {
                    name: packagesRouteData.packages.nested.paginationPackage.info.name,
                    about: packagesRouteData.packages.nested.paginationPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.paginationPackage.nested.reactPaginateType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.paginationPackage.nested.reactPaginateType.route,
                info: {
                    name: packagesRouteData.packages.nested.paginationPackage.nested.reactPaginateType.info.name,
                    about: packagesRouteData.packages.nested.paginationPackage.nested.reactPaginateType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.loaderProgressPackage.route,
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.route,
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.route,
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.rcProgressType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.loaderProgressPackage.nested.rcProgressType.route,
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.rcProgressType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.rcProgressType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.respinnerType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.loaderProgressPackage.nested.respinnerType.route,
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.respinnerType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.respinnerType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.spinnersReactType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.loaderProgressPackage.nested.spinnersReactType.route,
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.spinnersReactType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.spinnersReactType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.reactSpinnersType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactSpinnersType.route,
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactSpinnersType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactSpinnersType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.route,
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.iconPackage.route) {
            returnData = {
                route: packagesRouteData.packages.nested.iconPackage.route,
                info: {
                    name: packagesRouteData.packages.nested.iconPackage.info.name,
                    about: packagesRouteData.packages.nested.iconPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.iconPackage.nested.reactIconType.route) {
            returnData = {
                route: packagesRouteData.packages.nested.iconPackage.nested.reactIconType.route,
                info: {
                    name: packagesRouteData.packages.nested.iconPackage.nested.reactIconType.info.name,
                    about: packagesRouteData.packages.nested.iconPackage.nested.reactIconType.info.about
                }
            }
        }
        return returnData
    } catch (error) {
        return { message: error }
    }
}