import { useContext, useEffect, useState } from "react";
import { LoaderContext } from "../../Context/LoaderContext";
import { getClanInfoApi } from "../../../../../services/coc-api-service";

export const ClanInfo = () => {
  const { setLoader }: any = useContext(LoaderContext)
  const [studentList, setStudentList] = useState({})

  const getClanInfo = async () => {
    setLoader(true)
    try {
      const res = await getClanInfoApi('#2QPQPJ9VU')
      setStudentList(res.data)
      setLoader(false)
    } catch (error) {
      setLoader(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getClanInfo()
  }, [])

  return (
    <section className="studentPage">
      <div className="top">
      </div>
      <div className="middle">
        <div className="list">
          {/* {
            studentList.payload.data.map((item: any) => {
              return (
                <List key={item.id} data={item} handelMethod={{ deleteStudent, statusStudent }} />
              )
            })
          } */}
        </div>
      </div>
      <div className="bottom">
      </div>
    </section >
  )
}