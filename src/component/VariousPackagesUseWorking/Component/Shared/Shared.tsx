import { Link } from "react-router"

export const Shared = ({ propsPass }: any) => {
  return (
    <>
      <div className="vpuMenuMain">
        <div className="vpuMenuSub">
          <div className="vpuHeading">
            <span>Packages</span>
          </div>
          <div className="vpuList">

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/ui-component-package'}>UI Component Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/ui-component-package/blueprint-js-type'}>Blueprint JS</Link>
                <Link to={'/' + propsPass.routePaths + '/ui-component-package/spectrum-web-components-type'}>Spectrum Web Components</Link>
                <Link to={'/' + propsPass.routePaths + '/ui-component-package/chakra-ui-type'}>Chakra UI</Link>
                <Link to={'/' + propsPass.routePaths + '/ui-component-package/fluent-ui-type'}>Fluent UI</Link>
                <Link to={'/' + propsPass.routePaths + '/ui-component-package/semantic-ui-react-type'}>Semantic UI React</Link>
                <Link to={'/' + propsPass.routePaths + '/ui-component-package/ant-design-type'}>Ant Design</Link>
                <Link to={'/' + propsPass.routePaths + '/ui-component-package/material-ui-type'}>Material UI</Link>
                <Link to={'/' + propsPass.routePaths + '/ui-component-package/primereact-type'}>Primereact</Link>
                <Link to={'/' + propsPass.routePaths + '/ui-component-package/bootstrap-type'}>UI Bootstrap</Link>
              </div>
            </div>

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/chart-package'}>Chart Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/chart-package/apex-charts-type'}>Apex Charts</Link>
                <Link to={'/' + propsPass.routePaths + '/chart-package/nivo-type'}>Nivo</Link>
                <Link to={'/' + propsPass.routePaths + '/chart-package/highcharts-type'}>Highcharts Charts</Link>
                <Link to={'/' + propsPass.routePaths + '/chart-package/google-charts-type'}>Google Charts</Link>
                <Link to={'/' + propsPass.routePaths + '/chart-package/victory-type'}>Victory</Link>
                <Link to={'/' + propsPass.routePaths + '/chart-package/recharts-type'}>Recharts</Link>
                <Link to={'/' + propsPass.routePaths + '/chart-package/react-chart-js-type'}>React Chart JS</Link>
              </div>
            </div>

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/loader-progress-package'}>Loader Progress Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/loader-progress-package/react-top-loading-bar-type'}>React Top LoadingBar</Link>
                <Link to={'/' + propsPass.routePaths + '/loader-progress-package/react-circular-progressbar-type'}>React Circular Progressbar</Link>
                <Link to={'/' + propsPass.routePaths + '/loader-progress-package/rc-progress-type'}>Rc Progress</Link>
                <Link to={'/' + propsPass.routePaths + '/loader-progress-package/respinner-type'}>Respinner</Link>
                <Link to={'/' + propsPass.routePaths + '/loader-progress-package/spinners-react-type'}>Spinners React</Link>
                <Link to={'/' + propsPass.routePaths + '/loader-progress-package/react-spinners-type'}>React Spinners</Link>
                <Link to={'/' + propsPass.routePaths + '/loader-progress-package/react-loader-spinner-type'}>React Loader Spinner</Link>
              </div>
            </div>

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/layout-styling-package'}>Layout Styling Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/layout-styling-package/react-grid-layout-type'}>React Grid Layout</Link>
                <Link to={'/' + propsPass.routePaths + '/layout-styling-package/chromaJs-type'}>Chroma Js</Link>
                <Link to={'/' + propsPass.routePaths + '/layout-styling-package/tailwind-type'}>Tailwind</Link>
                <Link to={'/' + propsPass.routePaths + '/layout-styling-package/bootstrap-type'}>Style Bootstrap</Link>
                <Link to={'/' + propsPass.routePaths + '/layout-styling-package/styled-components-type'}>Styled Components</Link>
              </div>
            </div>

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/animation-package'}>Animation Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/animation-package/anime-js-type'}>Anime Js</Link>
                <Link to={'/' + propsPass.routePaths + '/animation-package/framer-motion-type'}>Framer Motion</Link>
                <Link to={'/' + propsPass.routePaths + '/animation-package/react-spring-type'}>React Spring</Link>
                <Link to={'/' + propsPass.routePaths + '/animation-package/animate-type'}>Animate</Link>
              </div>
            </div>

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/page-scroll-package'}>Page Scroll Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/page-scroll-package/react-scroll-type'}>React Scroll</Link>
                <Link to={'/' + propsPass.routePaths + '/page-scroll-package/smooth-scrollbar-type'}>Smooth Scrollbar</Link>
                <Link to={'/' + propsPass.routePaths + '/page-scroll-package/intersection-observer-type'}>Intersection Observer</Link>
              </div>
            </div>

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/tost-alert-package'}>Tost Alert Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/tost-alert-package/toastify-type'}>Toastify</Link>
                <Link to={'/' + propsPass.routePaths + '/tost-alert-package/sweet-alert-type'}>Sweet Alert</Link>
              </div>
            </div>

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/date-time-package'}>Date Time Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/date-time-package/luxon-type'}>Luxon</Link>
                <Link to={'/' + propsPass.routePaths + '/date-time-package/moment-type'}>Moment</Link>
              </div>
            </div>

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/some-useful-package'}>Some Useful Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/some-useful-package/faker-js-type'}>Faker JS</Link>
                <Link to={'/' + propsPass.routePaths + '/some-useful-package/log-symbols-type'}>Log Symbols</Link>
              </div>
            </div>

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/pagination-package'}>Pagination Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/pagination-package/react-paginate-type'}>React Paginate</Link>
              </div>
            </div>

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/icon-package'}>Icon Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/icon-package/react-icon-type'}>React Icon</Link>
              </div>
            </div>

            <div className="vpuItem">
              <div className="vpuHeading">
                <span>
                  <Link to={'/' + propsPass.routePaths + '/input-form-package'}>Input Form Package</Link>
                </span>
              </div>
              <div className="vpuLinks">
                <Link to={'/' + propsPass.routePaths + '/input-form-package/react-select-type'}>React Select</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
