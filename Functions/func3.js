try {
    alert("Вводим строку, которая содержит число, написанное прописью (0-999). Получить само число.")
let inputWord = prompt("Введите слово : ")
let newInputWord = inputWord.split(" ")
let numFromWord = 0

for(char of newInputWord){
    numFromWord += wordsForOnce(char)
    numFromWord += wordsForTens(char)
    numFromWord += wordsForHundreds(char)
    numFromWord += special(char)

}

function wordsForOnce(num){
    switch(num){
        case "один":
            return 1;
        case "два":
            return 2;
        case "три":
            return 3;
        case "четыре":
            return 4;
        case "пять":
            return 5;
        case "шесть":
            return 6;
        case "семь":
            return 7;
        case "восемь":
            return 8;
        case "девять":
            return 9;
        default:
            return 0;
        }
    }
    
function wordsForTens(num){
    switch(num){
        case "десять":
            return 10;
        case "двадцать":
            return 20;
        case "тридцать":
            return 30;
        case "сорок":
            return 40;
        case "пятьдесять":
            return 50;
        case "шестьдесять":
            return 60;
        case "семьдесять":
            return 70;
        case "восемьдесять":
            return 80;
        case "девяноста":
            return 90;
        default:
            return 0;
        }
    }
function wordsForHundreds(num){
        switch(num){
            case "сто":
                return 100;
            case "двести":
                return 200;
            case "триста":
                return 300;
            case "четыреста":
                return 400;
            case "пятьсот":
                return 500;
            case  "шестьсот":
                return 600;
            case "семьсот":
                return 700;
            case "восемьсот":
                return 800;
            case "девятьсот":
                return 900;
            default:
                return 0;
        }
    }
    
function special(num){
        switch(num){
            case "ноль":
                return 0;
            case "десять":
                return 10;
            case "одиннадцать":
                return 11;
            case "двенадцать":
                return 12;
            case "тринадцать":
                return 13;
            case "четыренадцать":
                return 14;
            case "пятьнадцать":
                return 15;
            case "шестьнадцать":
                return 16;
            case "семьнадцать":
                return 17;
            case "восемьнадцать":
                return 18;
            case "девятнадцать":
                return 19;
            default:
                return 0;
        }
    }

console.log(numFromWord)
} catch  {
    alert("Wrong input")
}