
// console.log(1)
// console.log(2)
// setTimeout(() => {
//     console.log("Function time out")
// },2000)      //2000 is in millisecond

// console.log(3)
// console.log(4)

const getTodos = (resource) => {
    return new Promise ((resolve,reject)=>{              //request,reject are function
        const request = new XMLHttpRequest()             // new is keyword used to create object, here object name is request
    
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status===200)
            {
                const data = JSON.parse(request.responseText)
             resolve(data)
            }
            else if(request.readyState === 4)
            {
             reject("could not fetch data")
            }
        })
        
        request.open('GET',resource);
        request.send()
        })
    }
 

// getTodos('todos.json',(err,data) => {
//      console.log(data)
//      getTodos('todos1.json',(err,data)=>{
//         console.log(data)
//         getTodos('todos2.json',(err,data)=>{
//             console.log(data)
//         })
//      })
// })

getTodos("todos.json").then((data)=>{
    console.log(data)
    return getTodos("todos1.json")
}).then((data)=>{
    console.log(data)
    return getTodos("todos2.json")
}).then((data)=>{
    console.log(data)
}).catch((err)=>{                              //catch is to get get error
    console.log(err)
})
