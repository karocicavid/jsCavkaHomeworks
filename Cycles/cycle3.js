
try {
    alert("Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и метод бинарного поиска)")
let input =  parseInt(prompt("Input number : "))
let inputParsed = 0
for(let i = 1 ; i <= input ; i++){
    if(i*i<=input){
        inputParsed = i
    }
}
console.log(inputParsed)
} catch  {
    alert("Wrong input")
}