import axios from "axios";

const api = axios.create({
    baseURL: "https://kisalayakgschool.com/api/",
    headers: {
        'X-Mashape-Key': 'required',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
    },
})

export const getStudentApi = (page: number, perPage: number) => {
    return api.get(`getStudent?page=${page}&perPage=${perPage}`)
}

export const saveStudentApi = (data: any) => {
    return api.post('saveStudent', data)
}

export const updateStudentApi = (data: any, id: any) => {
    return api.put('updateStudent/' + id, data)
}

export const statusStudentApi = (id: any) => {
    return api.patch('statusStudent/' + id, {})
}

export const deleteStudentApi = (id: any) => {
    return api.delete('deleteStudent/' + id)
}

export const detailStudentApi = (id: any) => {
    return api.get('detailStudent/' + id)
}