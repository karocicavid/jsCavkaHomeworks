try {
    alert("Написать программу определения оценки студента по его рейтингу")
let x =parseInt(prompt("Enter point of student :"))

if(0<=x<=19){
    console.log("F")
}
else if(20<=x<=39){
    console.log("E")
}
else if(40<=x<=59){
    console.log("D")
}
else if(60<=x<=74){
    console.log("C")
}
else if(75<=x<=89){
    console.log("B")
}
else if(90<=x<=100){
    console.log("A")
}
} catch  {
    alert("Wrong input")
}