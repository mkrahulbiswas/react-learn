import { BrowserRouter, Route, Routes } from "react-router";
import StdList from "./Component/StdList";
import StdDetail from "./Component/StdDetail";

export default function InitialQuery() {
  return (
    <>
      <p>This is example of <b>initial query</b> by using <b>dynamic route</b>. There we create a detail page to show more info.</p>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StdList />} />
          <Route path="detail/:id" element={<StdDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}