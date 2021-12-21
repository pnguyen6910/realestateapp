import axios from 'axios'

export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'c414c5364amsh61f14650acc4908p125308jsn6f0db1fa292b'
        }
    })

    return data
}