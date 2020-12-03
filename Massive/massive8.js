try{

alert("Поменять местами первую и вторую половину массива,например,для массива 1 2 3  4, результат 3 4 1 2")
let arr = new Array();
arr.length = parseInt(prompt("Введите длину массива :"))
for(let i = 0 ; i < arr.length ; i++){
    arr[i] = parseInt(prompt("Введите число массива :"))
}
console.log(arr)


for(let i = 0 ; i <arr.length ; i++){
    if(i < arr.length/2){
        console.log(arr[i+(arr.length/2)])
    }
    else{
        console.log(arr[i-(arr.length/2)])
    }
}

}
catch{
    alert("Введите все четно!")
}