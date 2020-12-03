try {
    alert("Посчитать количество нечетных элементов массива")
    let arr = new Array();
    arr.length = parseInt(prompt("Введите длину массива :"))
    for(let i = 0 ; i<arr.length ; i++){
        arr[i] = parseInt(prompt("Введите число массива :"))
    }
    
    let sum = 0
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]%2!==0){
           sum+=1
        }
    }
    
    console.log("Amount of odd numbers",sum)
} catch  {
    alert("Wrong input")
}
