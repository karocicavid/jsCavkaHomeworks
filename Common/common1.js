try{

alert(`Привет Сенсей ! Если а – четное посчитать а*б, иначе а+б`)
let a =parseInt(prompt("Enter value of a :"))
let b =parseInt(prompt("Enter value of b :"))

if(a%2==0){
    console.log(a*b)
}
else{
    console.log(a + b)
}
}
catch{
    alert("Wrong input!")
}