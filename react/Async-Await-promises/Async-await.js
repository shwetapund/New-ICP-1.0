async function runforLongTime() {
 for(let i=0; i<1000000000; i++){}
//  throw new Error('something went wrong')
return "Done"

}


const p = runforLongTime();
console.log(p);
p.then((result) =>{
    console.log('promise resolve')
    console.log(result);
}).catch((e) =>{
    console.log("error");
    console.log(e);
});

// runforShortTime();