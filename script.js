let submit = document.getElementById("btn")
submit.addEventListener("click",store)

let list = document.querySelector("#items");



function store(e){
 e.preventDefault();
let user=document.querySelector("#username")
let email=document.querySelector("#email")
let phone=document.querySelector("#Phone")
let myobj ={
    "username": user.value,
    "email": email.value,
    "phone": phone.value,
}

let myobj_serialized = JSON.stringify(myobj);
localStorage.setItem(email.value,myobj_serialized);
var li = document.createElement('li');
li.className = 'list-group-item';
li.append("username: "+myobj.username," email: "+myobj.email," phone: "+myobj.phone);
var deleteBtn = document.createElement('button');
deleteBtn.className="btn btn-danger delete";
deleteBtn.appendChild(document.createTextNode("delete"));
li.appendChild(deleteBtn)
console.log(li);
list.appendChild(li);
}


list.addEventListener("click",removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
      if(confirm('Are You Sure can we delete that item ? ')){
        var li = e.target.parentElement;
        list.removeChild(li);
      }
    }
  }



