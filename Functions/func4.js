alert("Найти расстояние между двумя точками в двумерном декартовом пространстве")
let firstPointX = parseInt(prompt("Введите обсциссу для первой точки : "))
let firstPointY = parseInt(prompt("Введите ординат для первой точки : "))
let secondPointX = parseInt(prompt("Введите обсциссу для второй точки : "))
let secondPointY = parseInt(prompt("Введите ординат для второй точки : "))

const distance = Math.sqrt((firstPointX-secondPointX)*(firstPointX-secondPointX) + (firstPointY-secondPointY)*(firstPointY-secondPointY))
console.log(distance)