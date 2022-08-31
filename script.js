let input = document.querySelector('.input');

function insert(num){
    input.textContent = input.textContent + num
}

function clean() {
    input.textContent = "";
}

function back() {
    var exp = input.textContent;
    input.textContent = exp.substring(0,exp.length-1);
}

function equal() {
    var exp = input.textContent;
    if(exp) {
    input.textContent = eval(exp);
    }
}

function sqrt() {
    input.textContent = Math.sqrt(eval(input.textContent))
}
