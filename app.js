const square = document.querySelector('.black-square')
const text = document.querySelector('#text')
let count=0;

const action = square.addEventListener('click', ()=>{
    if(count==0){
        text.innerHTML = 'Hi'
        count++;
    }  
    else{
        text.innerHTML = ''
        count =0;
    } 
})

