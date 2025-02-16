import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import UseQuery from "./UseQuery/UseQuery"

export const ReactQuery = () => {
  const queryClient = new QueryClient()
  return (
    <>
      <p>This <b>React Query</b> Every Feature Explain</p>
      <QueryClientProvider client={queryClient}>
        <UseQuery />
        {/* <DevTools /> */}
      </QueryClientProvider>
    </>
  )
}