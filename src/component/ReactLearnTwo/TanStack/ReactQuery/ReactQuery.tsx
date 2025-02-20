import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import UseMutation from "./UseMutation/UseMutation"
import UseQuery from "./UseQuery/UseQuery"

export const ReactQuery = () => {
  const queryClient = new QueryClient()

  // Example of configuring Global Value Declaration
  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       refetchOnMount: false,
  //     },
  //   },
  // })
  return (
    <>
      <p>This <b>React Query</b> Every Feature Explain</p>
      <QueryClientProvider client={queryClient}>
        <UseQuery />
        {/* <UseMutation /> */}
        {/* <DevTools /> */}
      </QueryClientProvider>
    </>
  )
}