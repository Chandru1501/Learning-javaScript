console.log("PERSON1: SHOWS TICKETS")
console.log("PERSON2: SHOWS TICKETS")

const promiseWifeBringTics = new Promise((resolve,reject) => {
      setTimeout(()=> {
            resolve(` tickets `);
      },3000)
});

const getPopcorn = promiseWifeBringTics.then((t)=>{
      console.log("here is the tickets");
      console.log("husband : we should go in");
      console.log("Wife : im very hungry can you bring me a popcorn please ? ");

      return new Promise((resolve,reject) => {
            resolve(`${t}popcorn `);
      })
})

//getColdDrinks

const getButter = getPopcorn.then((t)=> { 
      console.log("here is the popcorn");
      console.log("husband : we should go in");
      console.log("Wife : i want butter popcorn");

      return new Promise ((resolve,reject)=> {
            resolve(`${t}butterpopcorn`)
      })
})

const getColdDrinks = getButter.then((t) => {
      console.log(`husband : i got butter popcorn`);
      console.log("Wife : i want colddrinks");

      return new Promise ((resolve,reject)=>{
            resolve(`${t} coldDrinks ` )
      })
})

const goin = getColdDrinks.then((t)=> {
      console.log(`${t} lets go in ` );
})



console.log("PERSON4: SHOWS TICKETS")
console.log("PERSON5: SHOWS TICKETS")