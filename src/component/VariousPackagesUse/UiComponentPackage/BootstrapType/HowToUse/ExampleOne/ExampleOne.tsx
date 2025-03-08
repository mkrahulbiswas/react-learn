import { useState } from "react"
import { Alert, Button, ButtonGroup, Dropdown, DropdownButton, Tab, Tabs } from "react-bootstrap"

export const ExampleOne = () => {
  return (
    <>
      <AlertRB />
      <ButtonGroupRB />
      <ButtonRB />
      <TabsRB />
    </>
  )
}

export const AlertRB = () => {
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span><b>Alert box</b> by using <b>react bootstrap</b></span>
        </div>
        <div className="exampleCommonContent">
          <div className="row">
            {[
              'primary',
              'secondary',
              'success',
              'danger',
              'warning',
              'info',
              'light',
              'dark',
            ].map((variant, key) => (
              <div className="col-3" key={key}>
                <Alert style={{ fontSize: '12px' }} key={variant} variant={variant}>
                  This is a {variant} alert.
                </Alert>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export const ButtonGroupRB = () => {
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span><b>Alert box</b> by using <b>react bootstrap</b></span>
        </div>
        <div className="exampleCommonContent">
          <ButtonGroup>
            <Button>1</Button>
            <Button>2</Button>

            <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </div>
    </>
  )
}

export const ButtonRB = () => {
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span><b>Buttons</b> by using <b>react bootstrap</b></span>
        </div>
        <div className="exampleCommonContent">
          <Button variant="primary">Primary</Button>
          <Button className="ms-1" variant="secondary">Secondary</Button>
          <Button className="ms-1" variant="success">Success</Button>
          <Button className="ms-1" variant="warning">Warning</Button>
          <Button className="ms-1" variant="danger">Danger</Button>
          <Button className="ms-1" variant="info">Info</Button>
          <Button className="ms-1" variant="light">Light</Button>
          <Button className="ms-1" variant="dark">Dark</Button>
          <Button className="ms-1" variant="link">Link</Button>
        </div>
      </div>
    </>
  )
}

export const TabsRB = () => {
  const [key, setKey] = useState('home');
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span><b>Tabs</b> by using <b>react bootstrap</b></span>
        </div>
        <div className="exampleCommonContent">
          <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k: any) => setKey(k)} className="mb-3" >
            <Tab eventKey="home" title="Home">
              Tab content for Home
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              Tab content for Contact
            </Tab>
          </Tabs>
        </div>
      </div>
    </>
  )
}