export const apiConst: any = {
    baseURL: "https://kisalayakgschool.com/api/",
    header: {
        'X-Mashape-Key': 'required',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'appVersion': '1',
        'mode': 'test'
    },
    studentApi: {
        getEP: 'getStudent',
        saveEP: 'saveStudent',
        updateEP: 'updateStudent',
        statusEP: 'statusStudent',
        deleteEP: 'deleteStudent',
        detailEP: 'detailStudent',
    }
}