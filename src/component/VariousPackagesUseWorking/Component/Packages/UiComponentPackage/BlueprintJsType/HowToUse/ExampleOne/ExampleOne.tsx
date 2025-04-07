import { Breadcrumb, Breadcrumbs, Button, Callout, Icon, Tab, Tabs, TabsExpander } from "@blueprintjs/core";

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <BreadcrumbBJ />
      <ButtonBJ />
      <CalloutBJ />
      <ProgressBarBJ />
      <TabsBJ />
    </div>
  )
}

export const BreadcrumbBJ = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Buttons</span>
        </div>
        <div className="exampleCommonContent">
          <Breadcrumbs
            currentBreadcrumbRenderer={({ text, ...rest }) => (
              <Breadcrumb {...rest}>
                {text}&nbsp;
                <Icon icon="star" />
              </Breadcrumb>
            )}
            items={[
              { href: "/users", icon: "folder-close", text: "Users" },
              { href: "/users/janet", icon: "folder-close", text: "Janet" },
              { icon: "document", text: "image.jpg" },
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export const ButtonBJ = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Buttons</span>
        </div>
        <div className="exampleCommonContent">
          <Button text="Primary" intent="primary" />
        </div>
        <div className="exampleCommonContent">
          <Button text="Warning" intent="warning" />
        </div>
        <div className="exampleCommonContent">
          <Button icon="refresh" intent="danger" text="Reset" />
        </div>
        <div className="exampleCommonContent">
          <Button icon="user" endIcon="caret-down" text="Profile settings" />
        </div>
        <div className="exampleCommonContent">
          <Button endIcon="arrow-right" intent="success" text="Next step" />
        </div>
        <div className="exampleCommonContent">
          <Button>
            <Icon icon="document" /> Upload... <Icon icon="small-cross" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export const CalloutBJ = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Buttons</span>
        </div>
        <div className="exampleCommonContent">
          <Callout intent="primary">This is a primary Callout</Callout>
        </div>
        <div className="exampleCommonContent">
          <Callout intent="success">This is a success Callout</Callout>
        </div>
        <div className="exampleCommonContent">
          <Callout intent="warning">This is a warning Callout</Callout>
        </div>
        <div className="exampleCommonContent">
          <Callout intent="danger">This is a danger Callout</Callout>
        </div>
      </div>
    </div>
  )
}

export const ProgressBarBJ = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Buttons</span>
        </div>
        <div className="exampleCommonContent">
          <div className="bp5-progress-bar {{.modifier}}">
            <div className="bp5-progress-meter" style={{ width: '25%' }}></div>
          </div>
        </div>
        <div className="exampleCommonContent">
          <div className="bp5-progress-bar bp5-intent-primary {{.modifier}}">
            <div className="bp5-progress-meter" style={{ width: '50%' }}></div>
          </div>
        </div>
        <div className="exampleCommonContent">
          <div className="bp5-progress-bar bp5-intent-success {{.modifier}}">
            <div className="bp5-progress-meter" style={{ width: '75%' }}></div>
          </div>
        </div>
        <div className="exampleCommonContent">
          <div className="bp5-progress-bar bp5-intent-danger {{.modifier}}">
            <div className="bp5-progress-meter" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const TabsBJ = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Buttons</span>
        </div>
        <div className="exampleCommonContent">
          <Tabs id="TabsExample">
            <Tab id="ng" title="Angular" />
            <Tab id="mb" title="Ember" panelClassName="ember-panel" />
            <Tab id="rx" title="React" />
            <Tab id="bb" disabled title="Backbone" />
            <TabsExpander />
            <input className="bp5-input" type="text" placeholder="Search..." />
          </Tabs>;
        </div>
      </div>
    </div>
  )
}