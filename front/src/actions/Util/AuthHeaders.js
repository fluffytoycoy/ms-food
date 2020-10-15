export const authHeaders = {
    headers: {
        "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`,
        "refreshToken" : localStorage.getItem('refreshToken')
    }
}
