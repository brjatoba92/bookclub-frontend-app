import axios from 'axios'
import { QueryClient } from 'react-query'

export const api = axios.create({
  baseURL: 'https://api.bookclub.mapadaprogramacao.com.br/'
})

export const queryClient = new QueryClient()
