
// Now go head and add HEllo word before Item Lister

let newele = document.createElement("div");
newele.className="newele";
newele.id="newele1";
console.log(newele);
let text1 = document.createTextNode="HEllo";

newele.append(text1);

var beforehead = document.querySelector("header .container")

var h1 = document.querySelector("header h1")
console.log(h1)
newele.style.fontSize="20px";
beforehead.insertBefore(newele,h1);


// Now go head and add HEllo word before Item 1

let li = document.createElement("li")
console.log(li);
li.className="list-group-item";
li.append("HEllo")

let liele = document.querySelector("ul");


let li1 = document.querySelector("ul #firstli")

liele.insertBefore(li,li1)