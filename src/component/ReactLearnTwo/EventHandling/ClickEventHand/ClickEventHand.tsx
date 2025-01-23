import { Button } from "react-bootstrap"

function ClickEventHand() {
  const onClickOne = (event: any) => {
    alert('There in click event calling a flat arrow function, and in OnClick event call the function as named method')
    console.log(event)
    console.log(event.type)
  }
  function onClickTwo() {
    alert('There in click event calling a normal function, and in OnClick event call the function as named method')
  }
  const onClickThree = (event: any) => {
    alert('There in click event mentioning as flat arrow function')
    console.log(event)
    console.log(event.target)
  }
  const onClickFour = (data: any) => {
    alert('Hear passing data throught the click event, there i am getting hey ' + data)
  }
  return (
    <>
      <p>Using styled components:</p>
      <div className="EventHandlingStyle">
        <div>
          <Button variant='primary' onClick={onClickOne}>Click Me One</Button>
        </div>
        <div>
          <Button variant='info' onClick={onClickTwo}>Click Me Two</Button>
        </div>
        <div>
          <Button variant='success' onClick={(event) => onClickThree(event)}>Click Me Three</Button>
        </div>
        <div>
          <Button variant='warning' onClick={(event) => alert('There showing inline event handlers like this one is "' + event.type + '" event')}>Click Me Four</Button>
        </div>
        <div>
          <Button variant='danger' onClick={() => onClickFour('Rahul')}>Click Me Five</Button>
        </div>
      </div>
      <hr />
    </>
  )
}
export default ClickEventHand