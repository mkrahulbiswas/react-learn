import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import DevTools from "./DevTools/DevTools"
import UseQuery from "./UseQuery/UseQuery"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

export const ReactQuery = () => {
  const queryClient = new QueryClient()
  return (
    <>
      <p>This <b>React Query</b> Every Feature Explain</p>
      <QueryClientProvider client={queryClient}>
        <UseQuery />
        <DevTools />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  )
}