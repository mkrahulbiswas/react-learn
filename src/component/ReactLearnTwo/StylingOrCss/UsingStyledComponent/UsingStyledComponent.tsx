import styled from "styled-components"
function UsingStyledComponent() {
  let age: number = 15

  const Button = styled.button({
    backgroundColor: `${age >= 20 ? 'orange' : 'lightgreen'}`,
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
  })

  interface LabelProps {
    age: number;
  }

  const Label = styled.label<LabelProps>`
    display: inline-block;
    background-color: ${(props) => props.age >= 20 ? 'orange' : 'lightgreen'};
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
  `

  return (
    <>
      <p>Using styled components:</p>
      <div className="StylingOrCssMain">
        <div>
          <Button>Click Me 1</Button>
        </div>
        <div>
          <Label age={age}>My name is <b>RAHUL</b></Label>
        </div>
      </div>
      <hr />
    </>
  )
}
export default UsingStyledComponent