import http from '@/utils/request'
let $http = http();

export const getUserLogin = function (params) {
    return $http.get("/api/Account/Login",params).then( res => {
        return res && res.JsonData
    })
}

export const getMyTask = function (params) {
    return $http.get("/api/MyTask/Get",params).then( res => {
        return res && res.JsonData
    })
}

export const getWorkLogList = function (params) {
    return $http.post("/api/DashBoard/WorkLogList",params).then( res => {
        return res && res.JsonData
    })
}

export const addWorkLog = function (params) {
    return $http.post("/api/DashBoard/WorkLogCreate",params).then( res => {
        return res && res.JsonData
    })
}

export const getWorkLogDetail = function (params) {
    return $http.get("/api/DashBoard/GetWorkLogDetail",params).then( res => {
        return res && res.JsonData
    })
}

