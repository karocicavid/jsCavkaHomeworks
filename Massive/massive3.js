
try {
    alert("Найти индекс минимального элемента массива")
    let arr = new Array();
    arr.length = parseInt(prompt("Введите длину массива :"))
    for(let i = 0 ; i<arr.length ; i++){
        arr[i] = parseInt(prompt("Введите число массива :"))
    }
    
    let minValue = arr[0]
    let minValueIndex 
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]<minValue){
            minValue = arr[i]
            minValueIndex = i
        }
    }
    
    console.log("Max value index - is ",minValueIndex)
} catch {
    alert("Wrong input")
}