function addTodisplay(value) {
    document.getElementById('display').value += value;
}
function calculateresult() {
    let displayvalue= document.getElementById('display').value;
let result = eval(displayvalue);
document.getElementById('display').value = result;
}
function cleardisplay() {
    document.getElementById('display').value = '';
}
