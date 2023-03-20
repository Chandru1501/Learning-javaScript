//name , age , phone number, board marks 
//Complete the function eligible to check whether the student is eligible 
//or not for college. If board marks > 40 -> eligible , if less than 40 -> not eligible.
// increaseStudentCount which keep track of the number of students created.
//Complete the printStudentCount which prints the total count of students created till date

class student{
    static studentcount=0; 

    constructor(name,age,phone,marks){
        name =this.name;
        age = this.age;
        phone = this.phone;
        marks = this.marks;
        student.studentcount++
    }
     printStudentCount(){
        console.log(studentcount);
    }
    
    eligible(){
        if(this.marks>40){
            console.log("eligible");
        }
        else{
            console.log("not eligible")
        }
    }
  
}

let stud1 = new student("chandru",22,798585414,48);
let stud2 = new student("abcd",30,9874563215,39);

stud1.eligible();
stud2.eligible();



































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