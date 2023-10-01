async function runforLongTime() {

    for (let i = 0; i < 1000000000; i++) { }
    throw new Error('you have an error');
    return "function finished"

}
//function fullfill
// const p = runforLongTime();
// console.log(p);

// p.then((result) =>{
//      console.log('promise resolve');
//      console.log(result);  

// }).catch((e) =>{     
//     console.log('error caught');
//     console.log(e); 
// })
(async function(){
    try {
        const result = await runforLongTime();
        console.log(result);
    }
    catch (e) {
        console.log(e.message);
    }

})();

async function apiCall() {
    return{
        type: 'API_CALL'
    }
}
const triggerAPICall = async() =>{
    const response = await apiCall();
    console.log(response);
}
const response = await apiCall();
console.log(response);