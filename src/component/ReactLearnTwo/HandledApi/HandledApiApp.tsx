import DeleteApi from "./DeleteApi/DeleteApi"
import GetApi from "./GetApi/GetApi"
import PatchApi from "./PatchApi/PatchApi"
import PostApi from "./PostApi/PostApi"
import PutApi from "./PutApi/PutApi"

function HandledApiApp() {
  return (
    <>
      <PatchApi />
      <PutApi />
      <DeleteApi />
      <PostApi />
      <GetApi />
    </>
  )
}
export default HandledApiApp
