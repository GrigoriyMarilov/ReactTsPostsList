import axios from 'axios'

export default async function getPosts() {
    try {
        return await axios.get('https://cloud.codesupply.co/endpoint/react/data.json')
    } catch (error) {
        alert("Ошибка")
    }
}
