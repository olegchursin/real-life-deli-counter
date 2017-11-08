var button = document.getElementById('clicker'), // fetch a button
    counter = document.getElementById('counter'), // define a counter
    katzDeliLine = [], // create empty array
    n = 0; // starting number 
window.onload = function() { // display 0 on page load
    counter.innerHTML = n;
};
button.onclick = function takeNumber(katzDeliLine) { // execute takeNumber() when button is clicked
    ++n // increment n
    counter.innerHTML = `${n}` // display new number after each click
    katzDeliLine.push(n); // add new element to katzDeliLine array
};