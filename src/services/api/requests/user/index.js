import { api } from 'services/api'

export const updateUserCall = (data) =>
  api.put('/user', data, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
