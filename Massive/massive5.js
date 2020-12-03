try {
    alert("Посчитать сумму элементов массива с нечетными индексами")
    let arr = new Array();
    arr.length = parseInt(prompt("Введите длину массива :"))
    for(let i = 0 ; i<arr.length ; i++){
        arr[i] = parseInt(prompt("Введите число массива :"))
    }
    
    let sum = 0
    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i]%2!==0){
           sum+=arr[i]
        }
    }
    
    console.log("Sum of odd numbers",sum)
} catch  {
    alert("Wrong input")
}