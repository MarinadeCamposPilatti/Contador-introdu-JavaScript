let number = 0;

const show_number = document.getElementById('currentNumber');

function increment() {
    if(number < 10){
	number++;
	show_number.innerHTML = number;}
    document.addEventListener("click", function(){
        document.body.style.backgroundImage = "url('posit.jpg')";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    })}


function decrement() {
    if(number > -10){
        number--;
        show_number.innerHTML = number;
        document.addEventListener("click", function(){
            document.body.style.backgroundImage = "url('dark.jpeg')";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundSize = "cover";
          })
        }   
}

