var table1 = document.querySelector("#table1")
var table2 = document.querySelector("#table2")
var table3 = document.querySelector("#table3")

var foodprice = document.querySelector("#foodprice");
var foodname = document.querySelector("#dishname");
let description = document.querySelector("#descriptioninput")

var submit = document.querySelector("#btn");

var select = document.querySelector("#description");



var table="";
select.addEventListener("change",() =>{
    table = select.options[select.selectedIndex].textContent;
    
})

submit.addEventListener("click",additem,table);

function additem(){

    myobj = {
        "foodPrice" : parseInt(foodprice.value),
        "foodName" :  foodname.value,
        "table" : table
     }
console.log(myobj);

     if(myobj.table=="Table1"){
        console.log("table one");
        tableOne(myobj);
     }
     if(myobj.table=="Table2"){
        console.log("table Two")
        tableTwo(myobj);
     }
     if(myobj.table=="Table3"){
        console.log("table Three")
        tableThree(myobj);
     }
}

function tableOne(myObj){

    var li = document.createElement('li');
    li.className = 'list-group-item';
    var deleteBtn = document.createElement('button');
    deleteBtn.className="btn btn-danger";
    deleteBtn.appendChild(document.createTextNode("Delete"));

    li.append("Amount : ",myObj.foodPrice ," Dish Name : ",myObj.foodName);
    li.appendChild(deleteBtn);

    table1.appendChild(li);
    postcloud(myObj);

    deleteBtn.onclick=() =>{
        if(confirm('Are You Sure can we delete that item ? ')){
          table1.removeChild(li);
          deletecloud(myObj);
        }
      }

}

function tableTwo(myObj){

    
    var li = document.createElement('li');
    li.className = 'list-group-item';
    var deleteBtn = document.createElement('button');
    deleteBtn.className="btn btn-danger";
    deleteBtn.appendChild(document.createTextNode("Delete"));

    li.append("Amount : ",myObj.foodPrice ," Dish Name : ",myObj.foodName);
    li.appendChild(deleteBtn);

    table2.appendChild(li);
    postcloud(myObj);

    deleteBtn.onclick=() =>{
        if(confirm('Are You Sure can we delete that item ? ')){
          table2.removeChild(li);
          deletecloud(myObj);
        }
      }
}

function tableThree(myObj){

    var li = document.createElement('li');
    li.className = 'list-group-item';
    var deleteBtn = document.createElement('button');
    deleteBtn.className="btn btn-danger";
    deleteBtn.appendChild(document.createTextNode("Delete"));

    li.append("Amount : ",myObj.foodPrice ," Dish Name : ",myObj.foodName);
    li.appendChild(deleteBtn);

    table3.appendChild(li);
    postcloud(myObj);

    deleteBtn.onclick=() =>{
        if(confirm('Are You Sure can we delete that item ? ')){
          table3.removeChild(li);
          deletecloud(myObj);
    
        }
      }

}




function postcloud(myObj){
axios.post("https://crudcrud.com/api/85413ead77c34958a62a578db0a87f8f/order_details",myObj)
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log("error")
})
}

function deletecloud(myObj){
    console.log(myObj)

    axios.delete(`https://crudcrud.com/api/85413ead77c34958a62a578db0a87f8f/order_details/${myObj._id}`)
    .then((response)=>{
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })
}

window.addEventListener("DOMContentLoaded",showdetails);

function showdetails(){
 
  axios.get("https://crudcrud.com/api/85413ead77c34958a62a578db0a87f8f/order_details")
  .then((response)=> {
    console.log(response)

    for(var i=0;i<response.data.length;i++){
    
        if(response.data[i].table=="Table1"){
            tableOne(response.data[i]);
        }

        if(response.data[i].table=="Table2"){
            tableTwo(response.data[i]);
        }

        if(response.data[i].table=="Table3"){
           tableThree(response.data[i]);
        }
     

    }
})
  .catch((err)=>{
    console.log(err);
  })
}

