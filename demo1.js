//name , age , phone number, board marks 
//Complete the function eligible to check whether the student is eligible 
//or not for college. If board marks > 40 -> eligible , if less than 40 -> not eligible.
// increaseStudentCount which keep track of the number of students created.
//Complete the printStudentCount which prints the total count of students created till date


// class Student{

//     static count=0;

//     constructor(name , age , phone , marks){
//         this.name=name;
//         this.age=age;
//         this.phone=phone;
//         this.marks=marks;
//         Student.count++;
//     }
    
//     eligible(){
//         if(this.marks>40){
//             console.log(true);
//         }
//         else{
//             console.log(false);
//         }
//     }

//     static printStudentCount(){
//         console.log(Student.count);
//     }
    
//     }
    
//     let stud1 = new Student("chandru",22,7904254184,12);
    
//     let stud2 = new Student("chandru",22,7904254184,40);

//     Student.printStudentCount();
    
//     let stud3 = new Student("chandru",22,7904254184,56);
    
//     let stud4 = new Student("chandru",22,7904254184,39);
    
//     stud1.eligible();
//     stud2.eligible();
//     stud3.eligible();
//     stud4.eligible();

//     Student.printStudentCount();

    // let a=10;
    // const b=50;
    //  var c=70;
    // {
    //     // var c =72;
    //     // const b =60;
    //     let a =20;
    //     console.log(a)
    //     console.log(b)
    //     console.log(b)
    // }

    // console.log(a)
    // console.log(b)
    // console.log(c)


    // best example for closure.

// function fun1(){
  
//     let a =10
//     const b=20
//     var c =30 

//     return ()=>{
//         console.log(a);
//     }

// }

// const z = fun1();
// console.log(z)
// z()


//  great example for first class functions
function a(num1,num2,fun){

    return fun(num1,num2);

}

function add(num1,num2){
    return num1+num2
}

 const fun2 = a(5,55,add)

console.log(fun2)


// setTimeout(()=>{
//     console.log("helloo")
// },7000)


let promise = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        return "dude"
    },2000)
})
.then((resolve) => {
  console.log("hello " +resolve);
})
.catch(()=>{
    console.log("not resolved")
})



























// setTimeout(() => console.log('timer expired'), 1000)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// console.log('inside y')

// })

// inside x
// inside y
// timer expired


// setTimeout(() => console.log('timer1 expired'), 1000)



// setTimeout(() => console.log('timer2 expired'), 0)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// console.log('inside y')

// })

//inside x
//inside y
// timer2 expired
// timer1 expired

// setTimeout(() => console.log('timer1 expired'), 1000)



// setTimeout(() => console.log('timer2 expired'), 0)



// function x(y) {

// console.log('inside x');

// y();

// }



// x(function y(){

// setTimeout(() => console.log('inside y'), 0)

// })

//inside x
//timer2 expired
//inside y
//timer1 expired

// let a =20;
// let b =10;

// function fun1(){

//     console.log(a)
    
//     }
    
//     function fun2(){
    
//     console.log(b)
    
//     }
    
    
    
//     fun2()
    
//     fun1()

//     //output
//     10
//     20

//Which function would be picked by the Global Execution Context first ?

//  let a =20;
//  let b =10;

// function fun1(){

// console.log(a)

// }

// function fun2(){

// console.log(b)

// }



// fun2();

// fun1()


// function fun1(){

//     console.log("a")
    
//     }
    
//     function fun2(){
    
//     console.log("b")
    
//     }
    
    
    
//     setTimeout(fun2, 1000)
    
//     fun1()

    // a
    // b


    // function fun1(){

    //     console.log("a")
        
    //     }
        
    //     function fun2(){
        
    //     console.log("b")
        
    //     }
        
        
    //     fun1();
    //     fun2();

        // a
        // b

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 1000)

// console.log('d')

// a
// b
// d
// c

// const obj1= {

//     "key1": "value1",
    
//     "key2" : "value2",
    
//     "key3" : "value3"
    
//     }
    
//     const obj2 = { ...obj1 , "key3": "new value"}//spread operator

//     console.log(obj2);

// const obj= {

//     "key1": "value1",
    
//     "key2" : "value2",
    
//     "key3" : "value3"
    
//     }
    
//     const obj2 = { ...obj}
    
//     console.log(obj2 === obj);