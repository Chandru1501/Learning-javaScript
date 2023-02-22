let headTitle = document.getElementById("header-title");
headTitle.innerHTML="hello"
headTitle.style.borderBottom="solid 5px black";
headmain = document.getElementById("main-header");
// headmain.style.border="solid 5px black";
let additem =document.getElementById("title");
additem.textContent="ADD ITEM";
additem.style.color="green";

let items = document.getElementsByClassName("list-group-item")
items[2].style.backgroundColor="green";
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold";
}
console.log(items)