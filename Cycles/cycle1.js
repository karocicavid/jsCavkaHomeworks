try {
    alert("Найти сумму четных чисел и их количество в диапазоне от 1 до 99")
let even = 0
let quantity = 0
for(let i = 1;i<100;i++){
    if(i%2==0){
        even+=i
        quantity+=1
    }
}
console.log("Count sum and quantity of nums from 1 to 99")
console.log(even)
console.log(quantity)
} catch  {
    alert("Wrong input")
}