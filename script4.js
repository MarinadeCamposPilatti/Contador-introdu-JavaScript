let number = 0;

const show_number = document.getElementById('currentNumber');

function increment() {
	number++;
	show_number.innerHTML = number;
	if(number>=0){
		document.getElementById('currentNumber').style.color = "black"
	}
}

function decrement() {
	number--;
	show_number.innerHTML = number;
	if(number<0){
	document.getElementById('currentNumber').style.color = "red"
	}
}
    

