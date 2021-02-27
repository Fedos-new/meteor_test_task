import * as axios from "axios";


const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})

export const appAPI = {
    getPosts() {
        return instance.get('posts')
    },
    getUsers() {
        return instance.get('users')
    }
}
