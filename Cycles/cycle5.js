try {
    alert("Посчитать сумму цифр заданного числа")
let input =prompt("Input number : ")
let sumNum = 0

for (myChar of input ){
    sumNum += parseInt(myChar)
}
console.log(sumNum)

} catch  {
    alert("Wrong input")
}