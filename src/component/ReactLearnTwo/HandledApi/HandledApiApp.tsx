import DeleteApi from "./DeleteApi/DeleteApi"
import GetApi from "./GetApi/GetApi"
import PostApi from "./PostApi/PostApi"

function HandledApiApp() {
  return (
    <>
      <PostApi />
      <DeleteApi />
      <GetApi />
    </>
  )
}
export default HandledApiApp
