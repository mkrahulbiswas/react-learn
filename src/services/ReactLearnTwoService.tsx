import axios from "axios";

const api = axios.create({
    baseURL: "https://kisalayakgschool.com/api/getTestData",
    headers: {
        'X-Mashape-Key': 'required',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'appVersion': '1'
    },
})

export const getStudent = () => {
    return api.get("")
}