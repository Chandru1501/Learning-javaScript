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

// let myobj_serialized = JSON.stringify(myobj);
// localStorage.setItem(email.value,myobj_serialized);

axios.post("https://crudcrud.com/api/44971e39c8b845a980f2dcb598e5f36a/userdetails",myobj)
.then((response)=> {
  console.log(response);
})
.catch((err)=>{
  console.log(err);
})

var li = document.createElement('li');
li.className = 'list-group-item';
li.append("username: "+myobj.username," email: "+myobj.email," phone: "+myobj.phone);
var deleteBtn = document.createElement('button');
let editbtn = document.createElement("button");

deleteBtn.className="btn btn-danger delete";
editbtn.className="btn btn-success edit";

deleteBtn.appendChild(document.createTextNode("Delete"));
editbtn.appendChild(document.createTextNode("Edit"));
li.appendChild(deleteBtn);
li.appendChild(editbtn);
// console.log(li);
list.appendChild(li);
console.log(list.lastChild.lastChild)


deleteBtn.onclick=() =>{
    if(confirm('Are You Sure can we delete that item ? ')){
      list.removeChild(li);

axios.delete("https://crudcrud.com/api/44971e39c8b845a980f2dcb598e5f36a/userdetails") 
   }
  }

editbtn.onclick =(e) => {
 localStorage.removeItem(email.value)
 list.removeChild(li);
 user.value=myobj.username;
 email.value=myobj.email;
 phone.value=myobj.phone;
}

}