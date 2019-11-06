export const authHeaders = {
    headers: {
        "Authorization" : `${localStorage.getItem('accessToken')}`,
        "refreshToken" : localStorage.getItem('refreshToken')
    }
}
