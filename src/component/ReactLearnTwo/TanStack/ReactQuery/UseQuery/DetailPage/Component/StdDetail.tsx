import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router"
import { detailStudentApi } from "../../../../../../../services/api-service";

export default function StdDetail() {
  const params: any = useParams()
  const navigate = useNavigate();

  const resp = useQuery({
    queryKey: ['detailStudent3'],
    queryFn: async () => {
      try {
        const res = await detailStudentApi(params.id)
        return res.data.status == 1 ? res.data : []
      } catch (error) {
        console.log(error)
        return []
      }
    }
  })

  if (resp.isPending) return <p>Loading 1...</p>
  if (resp.isError) return <p>Error: {resp.error.message || 'Something Went Wrong'}</p>

  return (
    <>
      <div className="row bg-light p-4">
        <div className="col-12">
          <button className="btn btn-warning" onClick={() => navigate('/')}>Back</button>
        </div>
        <div className="col-12 mt-3">
          <p><b>Name:</b> {resp.data?.data.name}</p>
          <p><b>Email:</b> {resp.data?.data.email}</p>
          <p><b>Phone:</b> {resp.data?.data.phone}</p>
          <p><b>Class:</b> {resp.data?.data.class}</p>
        </div>
      </div>
    </>
  )
}