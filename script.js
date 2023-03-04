var myobj;
let submit = document.getElementById("btn")

submit.addEventListener("click",store)

let list = document.querySelector("#items");

var user=document.querySelector("#username")
var email=document.querySelector("#email")
var phone=document.querySelector("#Phone")


function store(e){

 e.preventDefault();

var myobj ={
    "username": user.value,
    "email": email.value,
    "phone": phone.value,
}

// let myobj_serialized = JSON.stringify(myobj);
// localStorage.setItem(email.value,myobj_serialized);

axios.post("https://crudcrud.com/api/0061aa2fac6e4c928bddfd9a24aff101/userdetails",myobj)
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
li.append("id : "+myobj._id,"username: "+myobj.username," email: "+myobj.email," phone: "+myobj.phone);
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
      axios.delete(`https://crudcrud.com/api/0061aa2fac6e4c928bddfd9a24aff101/userdetails/${myobj._id}`)
      .then((response)=>{
            console.log(response);
      })
      .catch((err)=>{
        console.log(err);
      })
   }
  }

editbtn.onclick =(e) => {
 list.removeChild(li);
 user.value=myobj.username;
 email.value=myobj.email;
 phone.value=myobj.phone;

 var newobj = {
  "username": myobj.username,
  "email": myobj.email,
  "phone": myobj.phone
 }

 axios.put(`https://crudcrud.com/api/0061aa2fac6e4c928bddfd9a24aff101/userdetails/${myobj._id}`,newobj)
 .then((response)=>{
       console.log(response);
 })
 .catch((err)=>{
   console.log(err);
 })
}

}


window.addEventListener("DOMContentLoaded",showdetails);

function showdetails(){
 
  axios.get("https://crudcrud.com/api/0061aa2fac6e4c928bddfd9a24aff101/userdetails")
  .then((response)=> {
    for(let i=0;i<response.data.length;i++){
      showoutputonscreen(response.data[i]);
    }

  })
  .catch((err)=>{
    console.log(err);
  })
}


