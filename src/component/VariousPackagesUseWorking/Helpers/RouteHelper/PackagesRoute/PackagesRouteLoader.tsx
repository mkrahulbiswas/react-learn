import { getPackagesRouteData } from "./PackagesRouteData";

export const getPackagesRouteLoader = async (dataPass: any) => {
    const packagesRouteData = getPackagesRouteData({})
    let returnData: any = []
    try {
        if (dataPass.type === packagesRouteData.packages.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.info.name,
                    about: packagesRouteData.packages.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.blueprintJsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.blueprintJsType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.blueprintJsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.spectrumWebComponentsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.chakraUiType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.chakraUiType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.chakraUiType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.fluentUiType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.fluentUiType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.fluentUiType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.semanticUiReactType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.semanticUiReactType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.semanticUiReactType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.antDesignType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.antDesignType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.antDesignType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.materialUiType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.materialUiType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.materialUiType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.primereactType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.primereactType.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.primereactType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.uiComponentPackage.nested.uiBootstrap.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.uiComponentPackage.nested.uiBootstrap.info.name,
                    about: packagesRouteData.packages.nested.uiComponentPackage.nested.uiBootstrap.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.apexChartsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.apexChartsType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.apexChartsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.nivoType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.nivoType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.nivoType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.highchartsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.highchartsType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.highchartsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.googleChartsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.googleChartsType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.googleChartsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.victoryType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.victoryType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.victoryType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.rechartsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.rechartsType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.rechartsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.chartPackage.nested.reactChartJsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.chartPackage.nested.reactChartJsType.info.name,
                    about: packagesRouteData.packages.nested.chartPackage.nested.reactChartJsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.inputFormPackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.inputFormPackage.info.name,
                    about: packagesRouteData.packages.nested.inputFormPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.inputFormPackage.nested.reactSelectType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.inputFormPackage.nested.reactSelectType.info.name,
                    about: packagesRouteData.packages.nested.inputFormPackage.nested.reactSelectType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.someUsefulPackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.someUsefulPackage.info.name,
                    about: packagesRouteData.packages.nested.someUsefulPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.someUsefulPackage.nested.fakerJsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.someUsefulPackage.nested.fakerJsType.info.name,
                    about: packagesRouteData.packages.nested.someUsefulPackage.nested.fakerJsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.someUsefulPackage.nested.logSymbolsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.someUsefulPackage.nested.logSymbolsType.info.name,
                    about: packagesRouteData.packages.nested.someUsefulPackage.nested.logSymbolsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.nested.reactGridLayoutType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.nested.chromaJsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.nested.chromaJsType.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.nested.chromaJsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.nested.tailwindType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.nested.tailwindType.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.nested.tailwindType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.nested.styleBootstrapType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.nested.styleBootstrapType.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.nested.styleBootstrapType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.layoutStylingPackage.nested.styledComponentsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.layoutStylingPackage.nested.styledComponentsType.info.name,
                    about: packagesRouteData.packages.nested.layoutStylingPackage.nested.styledComponentsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.animationPackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.animationPackage.info.name,
                    about: packagesRouteData.packages.nested.animationPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.animationPackage.nested.animeJsType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.animationPackage.nested.animeJsType.info.name,
                    about: packagesRouteData.packages.nested.animationPackage.nested.animeJsType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.animationPackage.nested.framerMotionType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.animationPackage.nested.framerMotionType.info.name,
                    about: packagesRouteData.packages.nested.animationPackage.nested.framerMotionType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.animationPackage.nested.reactSpringType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.animationPackage.nested.reactSpringType.info.name,
                    about: packagesRouteData.packages.nested.animationPackage.nested.reactSpringType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.animationPackage.nested.animateType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.animationPackage.nested.animateType.info.name,
                    about: packagesRouteData.packages.nested.animationPackage.nested.animateType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.pageScrollPackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.pageScrollPackage.info.name,
                    about: packagesRouteData.packages.nested.pageScrollPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.pageScrollPackage.nested.reactScrollType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.pageScrollPackage.nested.reactScrollType.info.name,
                    about: packagesRouteData.packages.nested.pageScrollPackage.nested.reactScrollType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.pageScrollPackage.nested.smoothScrollbarType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.pageScrollPackage.nested.smoothScrollbarType.info.name,
                    about: packagesRouteData.packages.nested.pageScrollPackage.nested.smoothScrollbarType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.pageScrollPackage.nested.intersectionObserverType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.pageScrollPackage.nested.intersectionObserverType.info.name,
                    about: packagesRouteData.packages.nested.pageScrollPackage.nested.intersectionObserverType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.tostAlertPackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.tostAlertPackage.info.name,
                    about: packagesRouteData.packages.nested.tostAlertPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.tostAlertPackage.nested.toastifyType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.tostAlertPackage.nested.toastifyType.info.name,
                    about: packagesRouteData.packages.nested.tostAlertPackage.nested.toastifyType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.tostAlertPackage.nested.sweetAlertType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.tostAlertPackage.nested.sweetAlertType.info.name,
                    about: packagesRouteData.packages.nested.tostAlertPackage.nested.sweetAlertType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.dateTimePackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.dateTimePackage.info.name,
                    about: packagesRouteData.packages.nested.dateTimePackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.dateTimePackage.nested.luxonType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.dateTimePackage.nested.luxonType.info.name,
                    about: packagesRouteData.packages.nested.dateTimePackage.nested.luxonType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.dateTimePackage.nested.momentType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.dateTimePackage.nested.momentType.info.name,
                    about: packagesRouteData.packages.nested.dateTimePackage.nested.momentType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.paginationPackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.paginationPackage.info.name,
                    about: packagesRouteData.packages.nested.paginationPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.paginationPackage.nested.reactPaginateType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.paginationPackage.nested.reactPaginateType.info.name,
                    about: packagesRouteData.packages.nested.paginationPackage.nested.reactPaginateType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactTopLoadingBarType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactCircularProgressbarType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.rcProgressType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.rcProgressType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.rcProgressType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.respinnerType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.respinnerType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.respinnerType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.spinnersReactType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.spinnersReactType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.spinnersReactType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.reactSpinnersType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactSpinnersType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactSpinnersType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.info.name,
                    about: packagesRouteData.packages.nested.loaderProgressPackage.nested.reactLoaderSpinnerType.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.iconPackage.route) {
            returnData = {
                info: {
                    name: packagesRouteData.packages.nested.iconPackage.info.name,
                    about: packagesRouteData.packages.nested.iconPackage.info.about
                }
            }
        }
        if (dataPass.type === packagesRouteData.packages.nested.iconPackage.nested.reactIconType.route) {
            returnData = {
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