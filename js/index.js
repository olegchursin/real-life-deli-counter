var button = document.getElementById('clicker'),
    counter = document.getElementById('counter'),
    katzDeliLine = [],
    n = 0;
window.onload = function() {
    counter.innerHTML = n;
};
button.onclick = function takeNumber(katzDeliLine) {
    ++n
    counter.innerHTML = `${n}`
    katzDeliLine.push(n);
};
