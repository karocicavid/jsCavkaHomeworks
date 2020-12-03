try {
    alert("Получить строковое название дня недели по номеру дня")
    let weekDay = parseInt(prompt("Напишите число дня недели : "))
    if( 1>weekDay && weekDay>7) {throw new Error}
    switch(weekDay){
        case 1:
            console.log("Monday")
            break;
        case 2:
            console.log("Tuesday")
            break;
        case 3:
            console.log("Wednesday")   
            break; 
        case 4:
            console.log("Thursday")
            break;
        case 5:
            console.log("Friday")
            break;
        case 6:
            console.log("Saturday")
            break;
        case 7:
            console.log("Sunday")
            break;
    }
} catch  {
    alert("Wrong input")
}