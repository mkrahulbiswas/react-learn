export const useHelperHook = (params: any) => {
  let finalData: any = []
  if (params.type === 'routeConcatenate') {
    if (params.data.length == 1) {
      finalData += params.data[0]
    } else {
      let url = '/'
      for (let i = 0; i < params.data.length; i++) {
        url += params.data[i] + '/'
      }
      finalData = url.slice(0, -1)
    }
  }
  return finalData;
}