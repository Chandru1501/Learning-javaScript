var table1 = document.querySelector("#table1")
var table2 = document.querySelector("#table2")
var table3 = document.querySelector("#table3")

var foodprice = document.querySelector("#foodprice");
var foodname = document.querySelector("#dishname");
var description = document.querySelector("#descriptioninput")

var submit = document.querySelector("#btn");

var select = document.querySelector("#description");



let table="";
select.addEventListener("change",() =>{
    table = select.options[select.selectedIndex].textContent;
    
})

submit.addEventListener("click",additem);

function additem(){

    myobj = {
        "foodPrice" : parseInt(foodprice.value),
        "foodName" :  foodname.value,
        "table" : table
     }

     if(myobj.table=="Table1"){ tables(myobj,table1) }
     if(myobj.table=="Table2"){ tables(myobj,table2) }
     if(myobj.table=="Table3"){ tables(myobj,table3) }
}

function tables(myObj,Table){

    var li = document.createElement('li');
    li.className = 'list-group-item';
    var deleteBtn = document.createElement('button');
    deleteBtn.className="btn btn-danger";
    deleteBtn.appendChild(document.createTextNode("Delete"));

    li.append("Amount : ",myObj.foodPrice ," Dish Name : ",myObj.foodName);
    li.appendChild(deleteBtn);

    Table.appendChild(li);
     postcloud(myObj);

    deleteBtn.onclick=() =>{
        if(confirm('Are You Sure can we delete that item ? ')){
          Table.removeChild(li);
          deletecloud(myObj);
        }
    }
}




async function postcloud(myObj){
let response = await axios.post("https://crudcrud.com/api/115618e449d64b83aca3c2413344d8ab/order_details",myObj)
try{
    console.log(response)
}
catch(err){
    console.log(`error${err}`)
}
}

async function deletecloud(myObj){
    console.log(myObj)
try{
   let response = await axios.delete(`https://crudcrud.com/api/115618e449d64b83aca3c2413344d8ab/order_details/${myObj._id}`);
   
        console.log(response)
    }
    catch(err){
        console.log(err)
    }
}

window.addEventListener("DOMContentLoaded",showdetails);

async function showdetails(){
 try{
  let response = await axios.get("https://crudcrud.com/api/115618e449d64b83aca3c2413344d8ab/order_details")

    console.log(response)
 
    for(var i=0;i<response.data.length;i++){
    
        if(response.data[i].table=="Table1"){
            tables(response.data[i],table1);
        }

        if(response.data[i].table=="Table2"){
            tables(response.data[i],table2);
        }

        if(response.data[i].table=="Table3"){
           tables(response.data[i],table3);
        }
     

    }
}
  catch(err){
    console.log(err);
  }
}

