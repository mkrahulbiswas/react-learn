import axios from "axios";
import { apiConst } from "../config/coc-constants";

const resp = axios.create({
    baseURL: apiConst.baseURL,
    headers: apiConst.header,
    maxBodyLength: Infinity,
})

export const getClanInfoApi = (clanTag: any) => {
    return resp.get(apiConst.cocApi.getClanEP + encodeURIComponent(clanTag))
}