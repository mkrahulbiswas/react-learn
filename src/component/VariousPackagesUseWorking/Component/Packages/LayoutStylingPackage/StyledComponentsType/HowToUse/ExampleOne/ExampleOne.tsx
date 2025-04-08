import styled, { keyframes } from "styled-components";

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <WrapperInsideTitle />
      <ButtonAsStyledProps />
      <ReverseElement />
      <PassedProps />
      <PseudoelEment />
      <AdditionalProps />
      <OverridingAttrs />
      <Animations />
    </div>
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
    <div className='vpu_ocoplmimotceic_item'>
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
    </div>
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
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonContent exampleCommonContentFloat">
        <Button>Normal Button</Button>
      </div>
      <div className="exampleCommonContent exampleCommonContentFloat">
        <TomatoButton>Tomato Button</TomatoButton>
      </div>
    </div>
  )
}

export const ReverseElement = () => {
  const Button = styled.button`
    display: inline-block;
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
    display: block;
  `;

  const ReversedButton = (props: any) => <Button {...props} children={props.children.split('').reverse()} />

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonContent exampleCommonContentFloat">
        <Button>Normal Button</Button>
      </div>
      <div className="exampleCommonContent exampleCommonContentFloat">
        <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
      </div>
    </div>
  )
}

export const PassedProps = () => {
  const Input = styled.input<{ $inputColor?: string; }>`
    padding: 0.5em;
    margin: 0.5em;
    color: ${props => props.$inputColor || "#BF4F74"};
    background: papayawhip;
    border: none;
    border-radius: 3px;
  `;

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonContent exampleCommonContentFloat">
        <Input defaultValue="@probablyup" type="text" />
      </div>
      <div className="exampleCommonContent exampleCommonContentFloat">
        <Input defaultValue="@geelen" type="text" $inputColor="rebeccapurple" />
      </div>
    </div>
  )
}

export const PseudoelEment = () => {
  const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    color: blue;

    &:hover {
      color: red; // <Thing> when hovered
    }

    & ~ & {
      background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
    }

    & + & {
      background: lime; // <Thing> next to <Thing>
    }

    &.something {
      background: orange; // <Thing> tagged with an additional CSS class ".something"
    }

    .something-else & {
      border: 1px solid; // <Thing> inside another element labeled ".something-else"
    }
  `;

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonContent">
        <Thing>Hello world!</Thing>
        <Thing>How ya doing?</Thing>
        <Thing className="something">The sun is shining...</Thing>
        <div>Pretty nice day today.</div>
        <Thing>Don't you think?</Thing>
        <div className="something-else">
          <Thing>Splendid.</Thing>
        </div>
      </div>
    </div>
  )
}

export const AdditionalProps = () => {
  const Input = styled.input.attrs<{ $size?: string; }>(props => ({
    // we can define static props
    type: "text",

    // or we can define dynamic ones
    $size: props.$size || "1em",
  }))`
    color: #BF4F74;
    font-size: 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.$size};
    padding: ${props => props.$size};
  `;

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonContent exampleCommonContentFloat">
        <Input placeholder="A small text input" />
      </div>
      <div className="exampleCommonContent exampleCommonContentFloat">
        <Input placeholder="A bigger text input" $size="2em" />
      </div>
    </div>
  )
}

export const OverridingAttrs = () => {
  const Input = styled.input.attrs<{ $size?: string }>((props) => ({
    type: 'text',
    $size: props.$size || '1em',
  }))`
    border: 2px solid #bf4f74;
    margin: ${(props) => props.$size};
    padding: ${(props) => props.$size};
  `;

  // Input's attrs will be applied first, and then this attrs obj
  const PasswordInput = styled(Input).attrs({
    type: "password",
  })`
    // similarly, border will override Input's border
    border: 2px solid aqua;
  `;

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonContent exampleCommonContentFloat">
        <Input placeholder="A bigger text input" $size="2em" />
      </div>
      <div className="exampleCommonContent exampleCommonContentFloat">
        {/* Notice we can still use the size attr from Input */}
        <PasswordInput placeholder="A bigger password input" $size="2em" />
      </div>
    </div>
  )
}

export const Animations = () => {
  const rotate = keyframes`
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  `;

  // Here we create a component that will rotate everything we pass in over two seconds
  const Rotate = styled.div`
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
  `;


  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommonContent exampleCommonContentFloat">
        <Rotate>&lt; 💅🏾 &gt;</Rotate>
      </div>
    </div>
  )
}