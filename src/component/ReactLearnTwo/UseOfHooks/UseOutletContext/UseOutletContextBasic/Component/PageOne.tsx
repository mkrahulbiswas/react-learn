import { useOutletContext } from "react-router";

export default function PageOne() {
  const { setName }: any = useOutletContext()
  return (
    <>
      <button className="btn btn-success btn-sm me-2" onClick={() => setName('Rahul Biswas')}>Set Rahul</button>
      <button className="btn btn-info btn-sm me-2" onClick={() => setName('Ram')}>Set Ram</button>
    </>
  )
}