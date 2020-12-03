
try {
    alert("Вводим число (0-999), получаем строку с прописью числа.")
let inputNum = prompt("Введите число : ")
let sentenceFromInput = "" 

if(inputNum.length === 3)
{
    if(parseInt(inputNum[1])!==1){
    sentenceFromInput += wordsForHundreds(parseInt(inputNum[0])) + " "
    sentenceFromInput += wordsForTens(parseInt(inputNum[1])) + " "
    sentenceFromInput += wordsForOnce(parseInt(inputNum[2])) + " "
    }
    else{
        sentenceFromInput += wordsForHundreds(parseInt(inputNum[0])) + " "
        sentenceFromInput += special(parseInt(inputNum[1]+inputNum[2]))
    }
}
else if(inputNum.length === 2)
{   
    if(parseInt(inputNum[1])!==1){
    sentenceFromInput += wordsForTens(parseInt(inputNum[0])) + " "
    sentenceFromInput += wordsForOnce(parseInt(inputNum[1])) + " "
    }
    else{
        sentenceFromInput += special(parseInt(inputNum[0]+inputNum[1]))
    }
}
else if(inputNum.length === 1)
{
    sentenceFromInput += wordsForOnce(parseInt(inputNum[0])) + " "
}


function wordsForOnce(num){
switch(num){
    case 1:
        return "один";
    case 2:
        return "два";
    case 3:
        return "три";
    case 4:
        return "четыре";
    case 5:
        return "пять";
    case 6:
        return "шесть";
    case 7:
        return "семь";
    case 8:
        return "восемь";
    case 9:
        return "девять";
    case 0:
        return "";
}
}

function wordsForTens(num){
switch(num){
    case 1:
        return "десять";
    case 2:
        return "двадцать";
    case 3:
        return "тридцать";
    case 4:
        return "сорок";
    case 5:
        return "пятьдесять";
    case 6:
        return "шестьдесять";
    case 7:
        return "семьдесять";
    case 8:
        return "восемьдесять";
    case 9:
        return "девяноста";
    case 0:
        return "";
}
}
function wordsForHundreds(num){
    switch(num){
        case 1:
            return "сто";
        case 2:
            return "двести";
        case 3:
            return "триста";
        case 4:
            return "четыреста";
        case 5:
            return "пятьсот";
        case 6:
            return "шестьсот";
        case 7:
            return "семьсот";
        case 8:
            return "восемьсот";
        case 9:
            return "девятьсот";
        case 0:
            return "";
    }
}

function special(num){
    switch(num){
        case 10:
            return "десять";
        case 11:
            return "одиннадцать";
        case 12:
            return "двенадцать";
        case 13:
            return "тринадцать";
        case 14:
            return "четыренадцать";
        case 15:
            return "пятьнадцать";
        case 16:
            return "шестьнадцать";
        case 17:
            return "семьнадцать";
        case 18:
            return "восемьнадцать";
        case 19:
            return "девятьнадцать";
    }
}
console.log(sentenceFromInput)
} catch  {
    alert("Wrong input")
}