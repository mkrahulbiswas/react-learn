import { useContext } from "react"
import { MCColorContext } from "../Context/MColorContext"
import { MCCommonContext } from "../Context/MCommonContext"
import { MCHomeContext } from "../Context/MCHomeContext"

export const MCHome = () => {
  const { color, setColor }: any = useContext(MCColorContext)
  const { count, setCount }: any = useContext(MCCommonContext)
  const { text, setText }: any = useContext(MCHomeContext)
  return (
    <>
      <div className="p-2 mb-3" style={{ backgroundColor: color }}>
        <h4>{text}</h4>
        <hr />
        <span className="d-block mb-3 text-center fw-bold">Count: {count}</span>
        <div className="d-block">
          <span className="d-block mb-2"><b>(1)</b> Hear after click on <b>Set Color Button</b> both <b>home</b> and <b>about</b> component background color is change, because there a common <b>context</b> is using</span>
          <span className="d-block mb-2"><b>(2)</b> Hear after click in <b>increase count button</b> which is present in <b>home page</b> the counter value is increased, because hear the <b>counter context</b> is main parent context.</span>
          <span className="d-block mb-2"><b>(3)</b> Hear after click in <b>srt text button</b> which is present in <b>home page</b> the page header text is changed, because hear the <b>home context</b> is for only the home component.</span>
          <br />
          <button className="btn btn-info btn-sm" onClick={() => setColor('lightpink')}><b>(1)</b> Set Color Pink</button>
          <button className="btn btn-success btn-sm ms-2" onClick={() => setCount(count + 1)}><b>(2)</b> Increase Count</button>
          <button className="btn btn-primary btn-sm ms-2" onClick={() => setText('Home page ' + Math.floor(Math.random() * 10))}><b>(3)</b> Set Text</button>
        </div>
      </div>
    </>
  )
}