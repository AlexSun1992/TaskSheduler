let text = document.getElementById('text');
let form = document.querySelector('.content-form');
let menu = document.querySelector('.content-menu');
let submit = document.querySelector('#submit');


form.addEventListener('submit',function(e){
    e.preventDefault();
let element = document.createElement('li');
element.classList.add('item');
element.innerHTML = text.value;
menu.append(element);
text.value ='';

let amount = menu.children;
if(amount.length>=10){
   text.setAttribute('disabled','disabled');
   submit.setAttribute('disabled', 'disabled');
};

for(let i = 0; i<=amount.length; i++){
    amount[i].classList.add('menu-item');
    amount[i].onclick = function(){
        amount[i].remove();
    }
}

});