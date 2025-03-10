import styled from "styled-components";

export const ExampleOne = () => {
  return (
    <>
      <WrapperInsideTitle />
      <ButtonAsStyledProps />
    </>
  )
}

export const WrapperInsideTitle = () => {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
  `;

  const Wrapper = styled.section`
    padding: 5px;
    background: #d5ffff;
  `;

  return (
    <>
      <div className="exampleCommon">
        {/* <div className="exampleCommonPoints">
          <span>Making <b>different position</b> of pagination</span>
        </div> */}
        <div className="exampleCommonContent">
          <Wrapper>
            <Title>
              Hello World!
            </Title>
          </Wrapper>
        </div>
      </div >
    </>
  )
}

export const ButtonAsStyledProps = () => {
  const Button = styled.button`
    color: #BF4F74;
    font-size: 1em;
    margin-right: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
  `;

  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
    margin-right: 0em;
  `;

  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonContent exampleCommonContentFloat">
          <Button>Normal Button</Button>
        </div>
        <div className="exampleCommonContent exampleCommonContentFloat">
          <TomatoButton>Tomato Button</TomatoButton>
        </div>
      </div >
    </>
  )
}