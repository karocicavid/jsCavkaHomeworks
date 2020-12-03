try{
alert("Найти суммы только положительных из трех чисел")
let x =parseInt(prompt("Enter first value :"))
let y =parseInt(prompt("Enter second value :"))
let z =parseInt(prompt("Enter third value :"))
let result =0

if(x>0){
    result +=x
}
if(y>0){
    result +=y
}
if(z>0){
    result +=z
}
console.log(result)
}
catch{
    alert("Wrong input")
}