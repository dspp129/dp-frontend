import api from '@/libs/api.request'

export const login = data => {
  return api.postRequest('/user/login', data)
}

export const logout = () => {
  return api.getRequest('/user/logout')
}

export const changePassword = data => {
  return api.patchRequest('/user/changePassword', data)
}

export const getUserInfo = () => {
  return api.getRequest(`/user/info`)
}

export const updateUserInfo = data => {
  return api.patchRequest('/user/update', data)
}

export const getRealNameList = deptId => {
  let url = '/user/realNameList'
  if (typeof deptId !== 'undefined') {
    url += `?deptId=${deptId}`
  }
  return api.getRequest(url)
}
