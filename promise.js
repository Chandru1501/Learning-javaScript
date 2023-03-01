console.log("PERSON1: SHOWS TICKETS")
console.log("PERSON2: SHOWS TICKETS")


const newMovie = async () => {

const promiseWifeBringTics = new Promise((resolve,reject) => {
      setTimeout(()=> {
            resolve(` tickets `)  },3000)
});

const getPopcorn = new Promise((resolve,reject)=> resolve(`popcorn`));
const addButter = new Promise((resolve,reject)=> resolve(`butter`));
const getColdDrinks = new Promise((resolve,reject)=> resolve(`colddrinks`));

const ticket = await promiseWifeBringTics
      console.log("here is the tickets");
      console.log("husband : we should go in");
      console.log("Wife : im very hungry can you bring me a popcorn please ? ");

const popcorn = await getPopcorn;
      console.log("here is the popcorn");
      console.log("husband : we should go in");
      console.log("Wife : i want butter popcorn");

const butter = await addButter;
      console.log(`husband : i got butter popcorn`);
      console.log("Wife : i want colddrinks");

const colddrinks = await getColdDrinks;
      console.log(` here is th colddrink ` );
      console.log(` lets go in ` );

      return ticket;
}

newMovie().then((m) => console.log(`person 3 : shows ${m}`))



console.log("PERSON4: SHOWS TICKETS")
console.log("PERSON5: SHOWS TICKETS")