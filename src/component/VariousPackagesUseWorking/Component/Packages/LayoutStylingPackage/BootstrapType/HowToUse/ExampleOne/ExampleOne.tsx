export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <ButtonBT />
      <CardBT />
      <ProgressBarBT />
      <AlertBT />
      <AccordianBT />
      <FormBT />
    </div>
  )
}

export const ButtonBT = () => {
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Various types of button</span>
        </div>
        <div className="exampleCommonContent">
          <button type="button" className="btn btn-primary">Primary</button>
          <button type="button" className="ms-1 btn btn-secondary">Secondary</button>
          <button type="button" className="ms-1 btn btn-success">Success</button>
          <button type="button" className="ms-1 btn btn-danger">Danger</button>
          <button type="button" className="ms-1 btn btn-warning">Warning</button>
          <button type="button" className="ms-1 btn btn-info">Info</button>
          <button type="button" className="ms-1 btn btn-light">Light</button>
          <button type="button" className="ms-1 btn btn-dark">Dark</button>
          <button type="button" className="ms-1 btn btn-link">Link</button>
        </div>
      </div >
    </>
  )
}

export const AlertBT = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Various types of button</span>
        </div>
        <div className="exampleCommonContent">
          <div className="row" style={{ fontSize: '12px' }}>
            <div className="col-3">
              <div className="pt-1 pb-1 alert alert-primary" role="alert">A simple primary alert</div>
            </div>
            <div className="col-3">
              <div className="pt-1 pb-1 alert alert-secondary" role="alert">A simple secondary alert</div>
            </div>
            <div className="col-3">
              <div className="pt-1 pb-1 alert alert-success" role="alert">A simple success alert</div>
            </div>
            <div className="col-3">
              <div className="pt-1 pb-1 alert alert-danger" role="alert">A simple danger alert</div>
            </div>
            <div className="col-3">
              <div className="pt-1 pb-1 alert alert-warning" role="alert">A simple warning alert</div>
            </div>
            <div className="col-3">
              <div className="pt-1 pb-1 alert alert-info" role="alert">A simple info alert</div>
            </div>
            <div className="col-3">
              <div className="pt-1 pb-1 alert alert-light" role="alert">A simple light alert</div>
            </div>
            <div className="col-3">
              <div className="pt-1 pb-1 alert alert-dark" role="alert">A simple dark alert</div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export const CardBT = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Various types of button</span>
        </div>
        <div className="exampleCommonContent">
          <div className="card" style={{ width: '18rem' }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export const AccordianBT = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Various types of button</span>
        </div>
        <div className="exampleCommonContent">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Accordion Item #1</button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Accordion Item #2</button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Accordion Item #3</button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export const ProgressBarBT = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Various types of button</span>
        </div>
        <div className="exampleCommonContent">
          <div className="progress" role="progressbar" aria-label="Success example" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar bg-success" style={{ width: '25%' }}>25%</div>
          </div>
        </div>
        <div className="exampleCommonContent">
          <div className="progress" role="progressbar" aria-label="Info example" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar bg-info" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="exampleCommonContent">
          <div className="progress" role="progressbar" aria-label="Danger example" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar bg-danger" style={{ width: '100%' }}>100%</div>
          </div>
        </div>
        <div className="exampleCommonContent">
          <div className="progress" role="progressbar" aria-label="Warning striped example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-bar progress-bar-striped bg-warning" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div >
    </>
  )
}

export const FormBT = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Various types of button</span>
        </div>
        <div className="exampleCommonContent">
          <form className="row g-3">
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">Address 2</label>
              <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">State</label>
              <select id="inputState" className="form-select">
                <option value="">Choose...</option>
                <option value="1">...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" htmlFor="gridCheck">Check me out</label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </form>
        </div>
      </div >
    </>
  )
}