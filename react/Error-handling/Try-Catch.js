// console.log("hii i am shweta");
// console.log("hii i am shital");

// try{ 
//     throw new Error('you have an error')  //throwing error
// }
// catch(e){

//     console.log(e.stack);
// } //try-catch statement use
// console.log("hii shweta"); 

function SayHello() {
    return 'Hello'
}
let msg = null ;
try{
    
msg = SayHello()
}
catch(e){
    console.log(e)
}
console.log(msg);


