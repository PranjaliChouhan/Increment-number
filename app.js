const number = document.querySelector("#number");
const increment = document.querySelector(".increment"); 
const decrement = document.querySelector(".decrement");
const reset = document.querySelector(".reset");

let x = 0;

increment.addEventListener('click', function() {
    let existing_number=number.value;
    x=existing_number;
    x++;
    number.value = x; 
});

decrement.addEventListener('click', function() {
    let existing_number=number.value;
    x=existing_number;
    x--;
    number.value = x;
});

reset.addEventListener('click', function() {
    x = 0;
    number.value = x; 
});

