/* Dark to Light  */

const themeBtn = document.querySelector(".theme-btn");

function changeColor(color){
    document.body.style.backgroundColor = color;
}

themeBtn.addEventListener('click', ()=>{
    
    const currentColor = document.body.style.backgroundColor;
    if(!currentColor || currentColor == 'white'){
        changeColor('black');
        themeBtn.innerText = 'Light Mode';
    } else {
        changeColor('white');
        themeBtn.innerText = 'Dark Mode';
    }
});

/* To Do App */

const addBtn = document.getElementById('add');
const inputBox = document.querySelector('#inputbox');
const tasks = document.querySelector('.tasks');

let allTask = [];


addBtn.addEventListener('click', () => {
    const value = inputBox.value;
    const li = document.createElement('li'); // <li> tag created

    li.innerText = value;
    tasks.appendChild(li);
    inputBox.value = ' ';

    const btn = document.createElement('button');
    btn.innerText = 'Del';
    btn.className += "del";
    li.appendChild(btn);

    btn.addEventListener('click',()=>{
        li.remove();
    });

});

const removeAll = document.getElementById('removeAll');

removeAll.addEventListener('click', function () {
    
});









