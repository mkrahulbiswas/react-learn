import { useNavigate } from "react-router";

export const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="pageNotFound">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="col-sm-10 m-auto text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">404</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>
                <p>The page you are looking for not avaible!</p>
                <div className="backTo">
                  <a className="goToHome" onClick={() => navigate('/')}>Go to home</a>
                  <a className="goToPrevious" onClick={() => navigate(-1)}>Go to previous</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
