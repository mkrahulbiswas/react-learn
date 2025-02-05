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

export const getStudent = () => {
    return api.get("getTestData")
}

export const deleteStudent = (id: any) => {
    return api.delete('deleteTestData/' + id)
}

export const saveStudent = (data: any) => {
    return api.post('saveTestData', data)
}