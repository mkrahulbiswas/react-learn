import { PEChildComponentFive, PEChildComponentFour, PEChildComponentOne, PEChildComponentThree, PEChildComponentTwo } from "./PEChildComponent";

function PEParentComponent() {
  const additionOfTwoNumber = (x: number, y: number) => {
    alert(`Addition of two numbers (${x}+${y}) is: ${x + y}`);
  }
  const subtractionOfTwoNumber = (x: number, y: number) => {
    alert(`Subtraction of two numbers (${x}-${y}) is: ${x - y}`);
  }
  const multiplicationOfTwoNumber = (x: number, y: number) => {
    alert(`Multiplication of two numbers (${x}*${y}) is: ${x * y}`);
  }
  const divisionOfTwoNumber = (x: number, y: number) => {
    alert(`Division of two numbers (${x}/${y}) is: ${x / y}`);
  }
  const myName = (name: string) => {
    alert(`My name is ${name}`);
  }
  return (
    <div>
      <p>From <b>child component</b> call parent method by event</p>
      <div className="EventHandlingStyle">
        <div>
          <PEChildComponentOne onClick={() => additionOfTwoNumber(11, 22)} />
        </div>
        <div>
          <PEChildComponentTwo onRahulClick={() => subtractionOfTwoNumber(22, 11)} />
        </div>
        <div>
          <PEChildComponentThree onClick={() => multiplicationOfTwoNumber(22, 2)} />
        </div>
        <div>
          <PEChildComponentFour onClick={() => divisionOfTwoNumber(22, 2)} />
        </div>
        <div>
          <PEChildComponentFive onMouseEnter={() => myName('Rahul Biswas')} />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default PEParentComponent