function clalculateCart(val1, val2, ...num1){
    return num1
}
// ... rest operator
// console.log(clalculateCart(200,300, 400, 500));

const user = {
    username : "shanto",
    price : 199

}

function handleobj(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleobj(user)
handleobj({
    username: "sha",
    price: 111
})


const myNewArray = [200, 400, 100, 600]
function SecondValue(getArray){
    return getArray[1]
}

console.log(SecondValue(myNewArray));
console.log(SecondValue([200, 400, 100, 600]));
