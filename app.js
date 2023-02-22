let headTitle = document.getElementById("header-title");
headTitle.innerHTML="hello"
headTitle.style.borderBottom="solid 5px black";
headmain = document.getElementById("main-header");
// headmain.style.border="solid 5px black";
let additem =document.getElementById("title");
additem.textContent="ADD ITEM";
additem.style.color="green";

// let items = document.getElementsByClassName("list-group-item")
// items[2].style.backgroundColor="green";
// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold";
// }

// let li = document.getElementsByTagName("li");
// li[4].style.color="blue";
// li[4].style.backgroundColor="red"




//Make the 2nd item have green background color
//Make the 3rd item invisible

let Item = document.querySelectorAll("li");
// Item[1].style.backgroundColor="green";
// Item[2].style.display="none";

// Using QuerySelectorALL change the font color
//  to green for 2nd item in the item list
// Choose all the odd elements and make their
//  background green using QuerySelectorALL

let odd = document.querySelectorAll(".list-group-item");
 odd[1].style.color="green";

// for(let i=0;i<odd.length;i+=2){
// odd[i].style.backgroundColor="green";
// }
let item = document.querySelectorAll(`.list-group-item:nth-child(odd)`);
for(let i=0;i<item.length;i++){
item[i].style.backgroundColor="green";
}