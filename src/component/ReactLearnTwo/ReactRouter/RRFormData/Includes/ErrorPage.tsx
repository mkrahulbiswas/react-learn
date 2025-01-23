import { useRouteError } from "react-router"

export default function ErrorPage() {
  const error: any = useRouteError()
  console.log(error);
  return (
    <>
      {
        error.status == 404 ? <h1>Page Not Found</h1> : <h1>Something went wrong</h1>
      }
    </>
  )
}