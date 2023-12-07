import { api } from 'services/api'

export const registerCall = (data) => api.post('/user', data)
