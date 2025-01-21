import axios from "axios"

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASEROW_API_URL,
    headers: { Authorization: `Token ${import.meta.env.VITE_BASEROW_PUBLIC_API_TOKEN}` },
})

export default instance
