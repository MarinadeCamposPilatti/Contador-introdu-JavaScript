let number = 0

document.getElementById("subtrair").addEventListener("click", function(){
    number--
    document.getElementById("currentNumber").innerText = number;
});

document.getElementById("adicionar").addEventListener("click", function(){
    number++
    document.getElementById("currentNumber").innerText = number;
});