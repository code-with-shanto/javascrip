const user = {
    username : "shanto",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomeMassage()
// user.username = "hitesh"
// user.welcomeMassage()

// console.log(this);

function one(){
    let username = "shanto"
    console.log(this.username);
    
}

// one()

const chai = ()=>{
     let username = "shanto"
    console.log(this);
}

// chai()


// const addtwo = (num1, num2) => {
//     return num1 + num2
// }

// const addtwo = (num1, num2) => num1 + num2
const addtwo = (num1, num2) => (num1 + num2)


console.log(addtwo(2,3));



