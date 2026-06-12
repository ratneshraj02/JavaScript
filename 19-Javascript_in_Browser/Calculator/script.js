/* Single Digit Calculator */
const display = document.querySelector('h3');

const sum_op = document.querySelector('.sum');
const sub_op = document.querySelector('.sub');
const mul_op = document.querySelector('.mul');
const divi_op = document.querySelector('.divi');

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');

const ac = document.querySelector('.ac');
const point = document.querySelector('.point');

const equal = document.querySelector('.equal');


// Add eventListener to access the number in string format
one.addEventListener('click', ()=> {
    const dis = one.innerText;
    display.innerHTML += dis;
});

two.addEventListener('click', ()=> {
    const dis = two.innerText;
    display.innerHTML += dis;
});

three.addEventListener('click', ()=> {
    const dis = three.innerText;
    display.innerHTML += dis;
});

four.addEventListener('click', ()=> {
    const dis = four.innerText;
    display.innerHTML += dis;
});

five.addEventListener('click', ()=> {
    const dis = five.innerText;
    display.innerHTML += dis;
});

six.addEventListener('click', ()=> {
    const dis = six.innerText;
    display.innerHTML += dis;
});

seven.addEventListener('click', ()=> {
    const dis = seven.innerText;
    display.innerHTML += dis;
});

eight.addEventListener('click', ()=> {
    const dis = eight.innerText;
    display.innerHTML += dis;
});

nine.addEventListener('click', ()=> {
    const dis = nine.innerText;
    display.innerHTML += dis;
});

zero.addEventListener('click', ()=> {
    const dis = zero.innerText;
    display.innerHTML += dis;
});

point.addEventListener('click', ()=> {
    const dis = point.innerText;
    display.innerHTML += dis;
});

ac.addEventListener('click', ()=> {
    const dis = ac.innerText;
    display.innerHTML = "";
});


//add eventListener in operator
sum_op.addEventListener('click', ()=> {
    const su = sum_op.innerText;
    display.innerText += su;
});

sub_op.addEventListener('click', ()=> {
    const su = sub_op.innerText;
    display.innerText += su;
});

mul_op.addEventListener('click', ()=> {
    const su = mul_op.innerText;
    display.innerText += su;
});

divi_op.addEventListener('click', () => {
    const su = divi_op.innerText;
    display.innerText += su;
})

// function of caluations
function sum(num1, num2){
    return num1+num2;
}
function sub(num1, num2){
    return num1-num2;
}
function mul(num1, num2){
    return num1*num2;
}
function divi(num1, num2){
    return num1/num2;
}
equal.addEventListener('click', ()=> {
    if(display.innerText[1] == "+"){
        display.innerText = (Number(display.innerText[0]) + Number(display.innerText[2]));
    }
    else if(display.innerText[1] == "-"){
        display.innerText = (Number(display.innerText[0]) - Number(display.innerText[2]));
    }
    else if(display.innerText[1] == "*"){
        display.innerText = (Number(display.innerText[0]) * Number(display.innerText[2]));
    }
    else if(display.innerText[1] == "*"){
        display.innerText = (Number(display.innerText[0]) / Number(display.innerText[2]));
    }
    else {
        display.innerText = alert('wrong things');
        display.innerText = '';
    }
    
});



