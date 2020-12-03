try {
alert("Посчитать выражение макс (а*б*с,  а+б+с)+3")
let x =parseInt(prompt("Enter first value :"))
let y =parseInt(prompt("Enter second value :"))
let z =parseInt(prompt("Enter third value :"))
let sum = x*y*z
let multiply = x+y+z
if(sum>multiply){
    console.log(sum+3)
}
else if(multiply>sum){
    console.log(multiply+3)
}
else{
    console.log(3)
}
} catch {
    console.log("Wrong input")
}