export const login = (data: any) => {
  return request({
    url: '/auth/login',
    method: 'post',
    data,
  })
}

export const refreshToken = () => {
  return request({
    url: '/auth/refreshToken',
    method: 'post',
  })
}
