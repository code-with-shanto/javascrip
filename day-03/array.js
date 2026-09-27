const num = [ 1, 2, 3, 4]
// console.log(typeof(num))

const myArr = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

// array methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));

// const newArr = myArr.join()

// // console.log(newArr);


// console.log( "A", myArr);

// const myn1 = myArr.slice(1,3)

// console.log(myn1);
// console.log("B", myArr);

// const myn2 = myArr.splice(1,3)

// console.log(myn2);




const marval_heros = ['thor', "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);
// console.log(marval_heros[3][1]);

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);


const all_new_heros = [...marval_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("shanto"))
console.log(Array.from("shanto"))
console.log(Array.from({name: "shanto"})) // interesting


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
