const name = "shanto"
const repoCount = 50

console.log(`hello, my name is ${name} and may repo count is ${repoCount}`); //string interpolation


const gameName = new String('shanto-hi-hello')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));


const newString = gameName.substring(0, 4)
console.log(newString)

const newStringOne = "   shanto   "
console.log(newStringOne.trim())


const url = "http://shanto.com/abulb%20asher"
console.log(url.replace('%20', '-'))

console.log(gameName.split('-'))