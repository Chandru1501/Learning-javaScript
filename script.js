var myobj;
let submit = document.getElementById("btn")

submit.addEventListener("click",store)

let list = document.querySelector("#items");

function store(e){

 e.preventDefault();
var user=document.querySelector("#username")
var email=document.querySelector("#email")
var phone=document.querySelector("#Phone")

var myobj ={
    "username": user.value,
    "email": email.value,
    "phone": phone.value,
}

// let myobj_serialized = JSON.stringify(myobj);
// localStorage.setItem(email.value,myobj_serialized);

axios.post("https://crudcrud.com/api/a3a105ba59b9495881dd5630a8ab85a6/userdetails",myobj)
.then((response)=> {
  console.log(response);
})
.catch((err)=>{
  console.log(err);
})

showoutputonscreen(myobj);

}


function showoutputonscreen(myobj){

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
list.appendChild(li);

deleteBtn.onclick=() =>{
    if(confirm('Are You Sure can we delete that item ? ')){
      list.removeChild(li);
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


window.addEventListener("DOMContentLoaded",showdetails);

function showdetails(){
 
  axios.get("https://crudcrud.com/api/a3a105ba59b9495881dd5630a8ab85a6/userdetails")
  .then((response)=> {
    for(let i=0;i<response.data.length;i++){
      showoutputonscreen(response.data[i]);
    }

  })
  .catch((err)=>{
    console.log(err);
  })
}


