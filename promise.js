const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve,reject)=>
      setTimeout(resolve,3000,`goodbye`)
);


function userlastActivityTime(){
    console.log(new Date);      
}

  setTimeout ( function () { console.log("before creating post 4, user lastActivityTime = ") + userlastActivityTime()},1000)

Promise.all([promise1,promise2,promise3])
.then(values => console.log(values))
.then(
      setTimeout (()=> {
            console.log("after creating post 4, user lastActivityTime = "+new Date())
      },5000)
)
