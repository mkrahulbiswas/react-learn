import styled from "styled-components"
function UsingStyledComponent() {
  let age: number = 15

  const Button = styled.button({
    backgroundColor: `${age >= 20 ? 'orange' : 'lightgreen'}`,
    border: 'none',
    padding: '5px 10px',
    borderRadius: '5px',
  })

  const Label = styled.label`
    display: inline-block;
    background-color: ${(props: any) => props.age >= 20 ? 'orange' : 'lightgreen'};
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