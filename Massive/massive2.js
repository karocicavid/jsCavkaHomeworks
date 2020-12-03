try {
    alert("Найти максимальный элемент массива")
    let arr = new Array();
    arr.length = parseInt(prompt("Введите длину массива :"))
    for(let i = 0 ; i<arr.length ; i++){
        arr[i] = parseInt(prompt("Введите число массива :"))
    }
    
    let maxValue = arr[0]
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]>maxValue){
            maxValue = arr[i]
        }
    }
    
    console.log("Max value - is ",maxValue)
} catch  {
    alert("Wrong input")
}