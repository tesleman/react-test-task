import * as axios from "axios";

let instance = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',

})


export let getUsers = {
    users(count){
     return instance.get(`users?page=1&count=${count}`)
         .then(response => {
             console.log(response)
             return response
         })
    }
}
