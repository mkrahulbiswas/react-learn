import axios from "axios";
import { apiConst } from "../config/constants";

const resp = axios.create({
    baseURL: apiConst.baseURL,
    headers: apiConst.header,
})

export const getStudentApi = (page: number, perPage: number) => {
    return resp.get(`${apiConst.studentApi.getEP}?page=${page}&perPage=${perPage}`)
}

export const saveStudentApi = (data: any) => {
    return resp.post(apiConst.studentApi.saveEP, data)
}

export const updateStudentApi = (data: any, id: any) => {
    return resp.put(apiConst.studentApi.updateEP + '/' + id, data)
}

export const statusStudentApi = (id: any) => {
    return resp.patch(apiConst.studentApi.statusEP + '/' + id, {})
}

export const deleteStudentApi = (id: any) => {
    return resp.delete(apiConst.studentApi.deleteEP + '/' + id)
}

export const detailStudentApi = (id: any) => {
    return resp.get(apiConst.studentApi.detailEP + '/' + id)
}