try {
    alert("Вывести число, которое является зеркальным отображением последовательности цифр заданного числа, например, задано число 123, вывести 321")
let input =prompt("Input number : ")
let sumNum =""

for (let i = input.toString().length-1;i>=0;i-- ){
    sumNum += input.toString()[i]
}
console.log(sumNum)
} catch  {
    alert("Wrong input")
}