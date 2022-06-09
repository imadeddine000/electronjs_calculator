

const btns=document.querySelectorAll('.btn')
const show=document.querySelector('.show input');
const submit=document.querySelector('.eq button')


let result;
btns.forEach((btn,id)=>btn.addEventListener('click',()=>calculate(btn)))

function calculate(btn){
    show.value+=btn.textContent
}
submit.addEventListener('click',()=>calc())
calc=()=>{
    let num1=parseInt(show.value)
    let num2=0;
    for(i=num1.toString().length+1;i<show.value.length;i++){
        num2 =num2+ show.value[i]
    }
    console.log(num1,parseInt(num2))
    switch (show.value[num1.toString().length]) {
        case '+':
            show.value=num1+parseInt(num2)
            break;
        case '-':
            show.value=num1-parseInt(num2)
            break;
        case '*':
            show.value=num1*parseInt(num2)
            break; 
        case '/':
            show.value=num1/parseInt(num2)
            break; 
        case '%':
            show.value=num1%parseInt(num2)
            break;
        default:show.value='you have not entered a operation'
            break;
    }
}
