try{
alert("Определить какой четверти принадлежит точка с координатами (х,у")
let x =parseInt(prompt("Enter value of x :"))
let y =parseInt(prompt("Enter value of y :"))
if(x>0 && y>0){
    console.log("In first quarter")
}
else if(x<0 && y>0){
    console.log("In second quarter")
}
else if(x<0 && y<0){
    console.log("In third quarter")
}
else if(x>0 && y<0){
    console.log("In fourth quarter")
}
else{
    console.log("In the start")
}
}
catch{
    alert("Wrong input")
}