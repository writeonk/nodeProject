// fetch("todos.json").then((response)=>{       //fetch return promise
//     console.log('resolved',response)
//     return response.json()                  //respone.json return promise through which we get the data
// }).then(data =>{
//     console.log(data)                   
// }).catch(err =>{
//     console.log('error found')
// })

const getTodos = async ()=>{                    //async makes the function asynchronous and it return promise
     const response = await fetch('todos.json')
      // awaits stores the js and it stops the value to assign it to data until the promise has been resolve
     if(response.status !== 200)        //if there is a problem in url
     {
        throw new Error('rejected') //when throw new error is executed then promis will return error and it will caught using .catch
     }
     const data = await response.json()
     return data
}

getTodos()                   //function call
   .then(data => {           //without .then we cannot get the value of respone
    console.log(data)
   })
   .catch(err =>{
    console.log(err.message)     //display err message
   })