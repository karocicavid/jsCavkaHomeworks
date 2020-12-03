
try {
    alert("Найти индекс максимального элемента массива")
let arr = new Array();
arr.length = parseInt(prompt("Введите длину массива :"))
for(let i = 0 ; i<arr.length ; i++){
    arr[i] = parseInt(prompt("Введите число массива :"))
}

let maxValue = arr[0]
let maxValueIndex 
for(let i = 0 ; i<arr.length ; i++){
    if(arr[i]>maxValue){
        maxValue = arr[i]
        maxValueIndex = i
    }
}

console.log("Min value index - is ",maxValueIndex)
} catch  {
    alert("Wrong input")
}