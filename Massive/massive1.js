try {
    alert("Найти минимальный элемент массива")
    let arr = new Array();
    arr.length = parseInt(prompt("Введите длину массива :"))
    for(let i = 0 ; i<arr.length ; i++){
        arr[i] = parseInt(prompt("Введите число массива :"))
    }
    
    let minValue = arr[0]
    for(let i =0 ; i<arr.length ; i++){
        if(arr[i]<minValue){
            minValue = arr[i]
        }
    }
    
    console.log("Min value - is ",minValue)
} catch  {
    alert("Wrong input")
}