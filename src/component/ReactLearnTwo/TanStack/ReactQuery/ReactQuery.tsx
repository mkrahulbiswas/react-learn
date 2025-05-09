import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import UseMutation from "./UseMutation/UseMutation"

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
        {/* <UseQuery /> */}
        {/* <Pagination /> */}
        {/* <UseQueries /> */}
        {/* <DependentQueries /> */}
        <UseMutation />
        {/* <DevTools /> */}
      </QueryClientProvider>
    </>
  )
}