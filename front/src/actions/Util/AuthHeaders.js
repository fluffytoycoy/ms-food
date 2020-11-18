const authHeaders = () => ({
  headers: {
        "Authorization" : `Bearer ${localStorage.getItem('accessToken')}`,
        "refreshToken" : localStorage.getItem('refreshToken')
    }
})

export default authHeaders;