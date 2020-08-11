

export let token = {
    async ss(){
        return await fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/token` )
            .then((response)=> { return response.json() })
    }}


export let getUsers = {

   async users(count) {

        return  await  fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=${count}`)
            .then((response) => {  return  response.json();  })

    }
}
export let positions = {
    async getPositions() {
          return  await  fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
               .then((response) => {  return  response.json();})
    }

}
export let registration = {
     registration(data , token) {
         try{
         return  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users',
         { method: 'POST', body: data, headers: { token: token
                }, })
            .then(function(response) { return response.json();})
    }
   catch(e){
       console.log(e)

       throw (e)
    }
}
}