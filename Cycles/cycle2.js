try {
    alert("Checking number simplicity ")
let mynum = parseInt(prompt("Enter a number"))
let mybool
if(mynum % 2==0 && mynum !== 2){
    mybool = 10
}
else{
    if(mynum>2){
    for(let i = 2;i< mynum;i++){
        if(mynum%i==0){
            mybool = 10
            break;
        }
        else{
            mybool = 5
        }
    }
    }
    else{
        mybool = 5
    }
}
if(mybool==10){console.log("Not simple")}
else if(mybool ==5){console.log("Simple")}
} catch {
    alert("wrong input")
}