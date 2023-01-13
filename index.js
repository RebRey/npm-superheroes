// see https://www.npmjs.com/package/superheroes documentation

// STEP 1: incorporate module into the current project
const superheroes = require("superheroes");
 
// STEP 2: use the random method to generate random super hero names and store the output (random super hero name) into a variable called mySuperHeroName
const mySuperHeroName = superheroes.random();

// STEP 3: Log the super hero name into the command line so we can see it
console.log(mySuperHeroName);

// STEP 4: on the terminal cd into this project and run the following code "node index.js"
// this will generate a random super hero name such as "Detective Soap"
