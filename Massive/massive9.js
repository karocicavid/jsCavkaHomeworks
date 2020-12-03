//только тут с Node.js
console.log("Сортировка методом Пузырька")
let arr = [];
let temp = 0;
for(let i = 0; i < 10; i++){
    arr[i] = Random()
    
}
console.log(arr)
for(i = 0; i < arr.length - 1; i ++){
    for(p = i + 1; p < arr.length; p++){
        if(arr[i] > arr[p]){
            temp = arr[i]
            arr[i] = arr[p]
            arr[p] = temp
        }
    }
}
for(let i = 0; i < 10; i++){
    console.log(arr[i])
    
}

function Random() {
    return Math.floor(Math.random() * (99))
}