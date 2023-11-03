import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.github.com/users/Jairotsb',
})

export const issues = axios.create({
  baseURL: 'https://api.github.com/repos/Jairotsb',
})
