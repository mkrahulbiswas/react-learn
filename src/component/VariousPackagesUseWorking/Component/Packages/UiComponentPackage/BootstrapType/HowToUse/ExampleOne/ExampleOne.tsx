export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <ButtonsBS />
      <AlertBS />
      <AccordianBS />
      <FormElementBS />
    </div>
  )
}

export const ButtonsBS = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Various types of button</span>
        </div>
        <div className="exampleCommonContent">
          <button type="button" className="btn btn-primary">Primary</button>
        </div>
        <div className="exampleCommonContent">
          <button type="button" className="btn btn-secondary">Secondary</button>
        </div>
        <div className="exampleCommonContent">
          <button type="button" className="btn btn-success">Success</button>
        </div>
        <div className="exampleCommonContent">
          <button type="button" className="btn btn-danger">Danger</button>
        </div>
        <div className="exampleCommonContent">
          <button type="button" className="btn btn-warning">Warning</button>
        </div>
        <div className="exampleCommonContent">
          <button type="button" className="btn btn-info">Info</button>
        </div>
        <div className="exampleCommonContent">
          <button type="button" className="btn btn-light">Light</button>
        </div>
        <div className="exampleCommonContent">
          <button type="button" className="btn btn-dark">Dark</button>
        </div>
        <div className="exampleCommonContent">
          <button type="button" className="btn btn-link">Link</button>
        </div>
      </div>
    </div>
  )
}

export const AlertBS = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Various types of alert</span>
        </div>
        <div className="exampleCommonContent">
          <div className="pt-2 pb-2 alert alert-primary" role="alert">A simple primary alert—check it out!</div>
          <div className="pt-2 pb-2 alert alert-secondary" role="alert">A simple secondary alert—check it out!</div>
          <div className="pt-2 pb-2 alert alert-success" role="alert">A simple success alert—check it out!</div>
          <div className="pt-2 pb-2 alert alert-danger" role="alert">A simple danger alert—check it out!</div>
          <div className="pt-2 pb-2 alert alert-warning" role="alert">A simple warning alert—check it out!</div>
          <div className="pt-2 pb-2 alert alert-info" role="alert">A simple info alert—check it out!</div>
          <div className="pt-2 pb-2 alert alert-light" role="alert">A simple light alert—check it out!</div>
          <div className="pt-2 pb-2 alert alert-dark" role="alert">A simple dark alert—check it out!</div>
        </div>
      </div>
    </div>
  )
}

export const AccordianBS = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Various types of alert</span>
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
      </div>
    </div>
  )
}

export const FormElementBS = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Various types of alert</span>
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
                <option selected>Choose...</option>
                <option>...</option>
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
      </div>
    </div>
  )
}