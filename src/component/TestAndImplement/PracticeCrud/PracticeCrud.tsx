import { WithoutTemplatingCrud } from "./WithoutTemplatingCrud/WithoutTemplatingCrud"
import { WithTemplatingCrud } from "./WithTemplatingCrud/WithTemplatingCrud"

export const PracticeCrud = () => {
  return (
    <>
      <WithTemplatingCrud />
      {/* <WithoutTemplatingCrud /> */}
    </>
  )
}
