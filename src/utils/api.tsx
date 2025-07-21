import axios from 'axios'
import useSWR from 'swr'

const axiosCreate = axios.create({
  baseURL: 'https://n8n.dizelequefez.com.br/webhook'
})


export function api(uri:string){
  return useSWR(uri, async (uri) => {
    const { data } = await axiosCreate.get(uri)
    return data
  })
}

