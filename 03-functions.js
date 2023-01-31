function header(){
    console.info("Practicing Functions!")
}

console.log(header())    // return type is undefined if no return keywords used

function sum(a, b){
    return a+b;
}

console.log(sum(1, 1))
console.log(sum(1, -1))

function product(a, b){
    return a*b;
}

console.log(product(2, 2))
console.log(product(2, -2))

/*
 function with no name called Anonymous Function!
 */
setTimeout(function(){
    console.log("Anonymous Function!");
}, 1000)

setTimeout(()=>{
    console.log("Arrow Function1!")
}, 2000)

setTimeout(()=>console.log("Arrow Function2!"), 2000)

setTimeout(3000)
console.log("******")