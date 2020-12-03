
try {
alert("Сделать реверс массива")
let arr = new Array();
arr.length = parseInt(prompt("Введите длину массива :"))
for(let i = 0 ; i < arr.length ; i++){
    arr[i] = parseInt(prompt("Введите число массива :"))
}
console.log("Array - is",arr)
let reversArray = new Array()
for(let i = arr.length-1 ; i >= 0 ; i--){
    reversArray.push(arr[i])
}

console.log("Reversed array - is",reversArray)
} catch  {
    alert("Wrong input")
}