let submit = document.getElementById("btn")
submit.addEventListener("click",store)

function store(e){
let user=document.querySelector("#username")
let email=document.querySelector("#email")
let myobj ={
    "username": user.value,
    "email": email.value,
}

let myobj_serialized = JSON.stringify(myobj);
localStorage.setItem("userdata",myobj_serialized);
// console.log(myobj_serialized)
}