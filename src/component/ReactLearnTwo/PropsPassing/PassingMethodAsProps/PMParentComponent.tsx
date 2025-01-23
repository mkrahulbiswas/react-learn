import { PMChildComponentOne, PMChildComponentThree, PMChildComponentTwo } from "./PMChildComponent";

function PMParentComponent() {
  const additionOfTwoNumber = (x: number, y: number) => {
    alert(`Addition of two numbers (${x}+${y}) is: ${x + y}`);
  }
  const subtractionOfTwoNumber = (x: number, y: number) => {
    alert(`Subtraction of two numbers (${x}-${y}) is: ${x - y}`);
  }
  const multiplicationOfTwoNumber = (x: number, y: number) => {
    alert(`Multiplication of two numbers (${x}*${y}) is: ${x * y}`);
  }
  return (
    <div>
      <p>From <b>child component</b> call parent method by method</p>
      <div className="EventHandlingStyle">
        <div>
          <PMChildComponentOne callingMethod={() => additionOfTwoNumber(10, 5)} />
        </div>
        <div>
          <PMChildComponentTwo callingMethod={subtractionOfTwoNumber} />
        </div>
        <div>
          <PMChildComponentThree callingMethod={multiplicationOfTwoNumber} />
        </div>
      </div>
      <hr />
    </div>
  )
}

export default PMParentComponent