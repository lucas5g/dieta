import axios from 'axios'
import useSWR from 'swr'

export const axiosCreate = axios.create({
  baseURL: 'https://n8n.dizelequefez.com.br/webhook-test'
})


export function api(uri:string){
  return useSWR(uri, async (uri) => {
    const { data } = await axiosCreate.get(uri)
    return data
  })
}

