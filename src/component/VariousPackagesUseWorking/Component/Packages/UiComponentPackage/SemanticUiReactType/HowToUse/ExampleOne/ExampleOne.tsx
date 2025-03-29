import { Breadcrumb, BreadcrumbDivider, BreadcrumbSection, Button, ButtonContent, Divider, Grid, GridColumn, Icon, Image, Progress, Segment } from 'semantic-ui-react'

export const ExampleOne = () => {
  return (
    <>
      <ButtonsSR />
      <BreadcrumbSR />
      <DividerSR />
      <ProgressSR />
    </>
  )
}

export const ButtonsSR = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Various Types Of Buttons</span>
        </div>
        <div className="exampleCommonContent">
          <Button content='Primary' primary />
          <Button content='Secondary' secondary />
        </div>
        <div className="exampleCommonContent">
          <Button animated>
            <ButtonContent visible>Next</ButtonContent>
            <ButtonContent hidden>
              <Icon name='arrow right' />
            </ButtonContent>
          </Button>
          <Button animated='vertical'>
            <ButtonContent hidden>Shop</ButtonContent>
            <ButtonContent visible>
              <Icon name='shop' />
            </ButtonContent>
          </Button>
          <Button animated='fade'>
            <ButtonContent visible>Sign-up for a Pro account</ButtonContent>
            <ButtonContent hidden>$12.99 a month</ButtonContent>
          </Button>
        </div>
        <div className="exampleCommonContent">
          <Button
            content='Like'
            icon='heart'
            label={{ as: 'a', basic: true, content: '2,048' }}
            labelPosition='right'
          />
          <Button
            content='Like'
            icon='heart'
            label={{ as: 'a', basic: true, pointing: 'right', content: '2,048' }}
            labelPosition='left'
          />
          <Button
            icon='fork'
            label={{ as: 'a', basic: true, content: '2,048' }}
            labelPosition='left'
          />
        </div>
      </div>
    </>
  )
}

export const BreadcrumbSR = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Breadcrumb</span>
        </div>
        <div className="exampleCommonContent">
          <Breadcrumb>
            <BreadcrumbSection link>Home</BreadcrumbSection>
            <BreadcrumbDivider icon='right chevron' />
            <BreadcrumbSection link>Registration</BreadcrumbSection>
            <BreadcrumbDivider icon='right arrow' />
            <BreadcrumbSection active>Personal Information</BreadcrumbSection>
          </Breadcrumb>
        </div>
      </div>
    </>
  )
}

export const DividerSR = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Divider</span>
        </div>
        <div className="exampleCommonContent">
          <Segment>
            <Grid columns={2} relaxed='very'>
              <GridColumn>
                <p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
                <p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
                <p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
                <p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
              </GridColumn>
              <GridColumn>
                <p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
                <p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
                <p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
                <p>
                  <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
                </p>
              </GridColumn>
            </Grid>

            <Divider vertical>And</Divider>
          </Segment>
        </div>
      </div>
    </>
  )
}

export const ProgressSR = () => {
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Pagination</span>
        </div>
        <div className="exampleCommonContent">
          <Segment inverted>
            <Progress percent={32} inverted color='red' progress />
            <Progress percent={59} inverted color='orange' progress />
            <Progress percent={13} inverted color='yellow' progress />
            <Progress percent={37} inverted color='olive' progress />
            <Progress percent={83} inverted color='green' progress />
            <Progress percent={23} inverted color='teal' progress />
            <Progress percent={85} inverted color='blue' progress />
            <Progress percent={38} inverted color='violet' progress />
            <Progress percent={47} inverted color='purple' progress />
            <Progress percent={29} inverted color='pink' progress />
            <Progress percent={68} inverted color='brown' progress />
            <Progress percent={36} inverted color='grey' progress />
            <Progress percent={72} inverted color='black' progress />
          </Segment>
        </div>
      </div>
    </>
  )
}