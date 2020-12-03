
try {
    alert("Вычислить факториал числа n. n! = 1*2*…*n-1*n;!")
let input =  parseInt(prompt("Input number : "))
let factorialInput = 1
for(let i = 1;i<=input;i++){
    factorialInput*=i
}
console.log(factorialInput)

} catch  {
    alert("Wrong input")
}