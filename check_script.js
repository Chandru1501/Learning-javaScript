let amount = document.querySelector("#amount");
let description = document.querySelector("#descriptioninput")
let category = document.querySelector("#categoryinput")

let list = document.querySelector("#items");

var select = document.querySelector("#description");
var selection = document.querySelector("#category");

select.addEventListener("change",() =>{
var descriptionval = select.options[select.selectedIndex].textContent;
description.value=descriptionval;
})

selection.addEventListener("change",() =>{
var categoryval = selection.options[selection.selectedIndex].textContent;
category.value= categoryval
})

const additems = document.getElementById("submiting");

additems.addEventListener("click",additem)

function additem(e){
    e.preventDefault();
myObj = {
    "amount": amount.value,
    "description": description.value,
    "category": category.value,
}
  displayitems(myObj);
}

function displayitems(myObj) {

let myobj_serialized = JSON.stringify(myObj);
localStorage.setItem(amount.value,myobj_serialized);

var li = document.createElement('li');
li.className = 'list-group-item';
li.append("Amount : ",myObj.amount  ," description : ",myObj.description," category : ",myObj.category);
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
      deleteonlocal(myObj.amount);
    }
  }

editbtn.onclick =() => {
 deleteonlocal( myObj.amount);
 list.removeChild(li);
 amount.value=myObj.amount;
 description.value=myObj.description;
 category.value=myObj.category

}
}

window.addEventListener("DOMContentLoaded",()=>{
for(let i=0;i<localStorage.length;i++){
  displayitems(JSON.parse(localStorage.getItem(localStorage.key(i))));
}
})


function deleteonlocal(keyvalue){
  localStorage.removeItem(keyvalue);
}