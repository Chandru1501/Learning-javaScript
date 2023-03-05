var price = document.querySelector("#productprice");
var productname = document.querySelector("#productname");
var submit = document.querySelector("#btn");
var total = document.querySelector("#total");

var items = document.querySelector("#items");



var totalvalue=0;

submit.addEventListener("click",additems);

var myobj;

function additems(){

 myobj = {
    "productPrice" : parseInt(price.value),
    "productName" :  productname.value,
 }

addDetails(myobj);

}


function addDetails(myobj){

 axios.post("https://crudcrud.com/api/31315ecfa5fe4e34ac30768cde7ec27a/add_user",myobj)
 .then((response)=>{
      console.log(response);
 })   
 .catch((err)=>{
    console.log(err);
  })


showoutputonscreen(myobj);

}

function showoutputonscreen(myobj){

// adding total while adding products

    totalvalue+=myobj.productPrice;
    total.textContent=totalvalue;

var li = document.createElement("li");
li.className ="list-group-item";
li.append("Product Price = Rs."+myobj.productPrice+" Product name = "+myobj.productName)
var deleteBtn = document.createElement('button');
deleteBtn.className="btn btn-danger";
deleteBtn.appendChild(document.createTextNode("Delete"));deleteBtn.id="delete";

li.appendChild(deleteBtn)
items.appendChild(li);

deleteBtn.onclick= (e)=>{
    if(confirm('Are You Sure can we delete that item ? ')){
    items.removeChild(li);
    console.log("before deleting product value "+parseInt(myobj.productPrice) )
    console.log("before deleting totalvalue "+ totalvalue)
    //while subracting while deleting total
    totalvalue =totalvalue-parseInt(myobj.productPrice)
     total.textContent=totalvalue;
    deleteuser(myobj);
}
}

}



function deleteuser(myobj){
    axios.delete(`https://crudcrud.com/api/31315ecfa5fe4e34ac30768cde7ec27a/add_user/${myobj._id}`)
    .then((response)=>{
          console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    })
    
    console.log(myobj._id)
    }
    

window.addEventListener("DOMContentLoaded",showdetails);

function showdetails(){
 
  axios.get("https://crudcrud.com/api/31315ecfa5fe4e34ac30768cde7ec27a/add_user")
  .then((response)=> {
    for(let i=0;i<response.data.length;i++){
    
      showoutputonscreen(response.data[i]);
    }

  })
  .catch((err)=>{
    console.log(err);
  })
}

