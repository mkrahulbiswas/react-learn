import DeleteApi from "./DeleteApi/DeleteApi"
import GetApi from "./GetApi/GetApi"
import PostApi from "./PostApi/PostApi"
import PutApi from "./PutApi/PutApi"

function HandledApiApp() {
  return (
    <>
      <PutApi />
      <DeleteApi />
      <PostApi />
      <GetApi />
    </>
  )
}
export default HandledApiApp
