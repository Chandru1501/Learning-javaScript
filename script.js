let submit = document.getElementById("btn")
submit.addEventListener("click",store)

function store(e){
let user=document.querySelector("#username")
let email=document.querySelector("#email")
localStorage.setItem(user.value,email.value);
console.log(user.value)
console.log(email.value)
}