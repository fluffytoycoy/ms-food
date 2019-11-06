export const authHeaders = {
    headers: {
        "Authorization" : `bearer ${localStorage.getItem('accessToken')}`,
        "refreshToken" : localStorage.getItem('refreshToken')
    }
}
