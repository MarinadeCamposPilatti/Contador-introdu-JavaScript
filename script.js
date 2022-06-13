let number = 0;

const show_number = document.getElementById('currentNumber');

function increment() {
	number++;
	show_number.innerHTML = number;
}

function decrement() {
	number--;
	show_number.innerHTML = number;
}