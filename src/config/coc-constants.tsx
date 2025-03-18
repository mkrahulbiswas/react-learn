export const apiConst: any = {
    baseURL: "https://api.clashofclans.com/v1/",
    header: {
        'Content-Type': 'application/json; charset=utf-8',
        'Authorization': `Bearer ${import.meta.env.VITE_COC_BEARER_TOKEN}`,
    },
    cocApi: {
        getClanEP: 'clans/',
    }
}