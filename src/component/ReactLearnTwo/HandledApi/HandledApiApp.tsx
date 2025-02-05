import DeleteApi from "./DeleteApi/DeleteApi"
import GetApi from "./GetApi/GetApi"
import PostApi from "./PostApi/PostApi"

function HandledApiApp() {
  return (
    <>
      <DeleteApi />
      <PostApi />
      <GetApi />
    </>
  )
}
export default HandledApiApp
