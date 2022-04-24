let count=0;
const value=document.querySelector('#value');
const btns=document.querySelectorAll('.btn');
console.log('value',value);
console.log('btns',btns);

btns.forEach( (btn)=>{
    btn.addEventListener('click',(e)=>{

    const styles=e.currentTarget.classList;
    if(styles.contains('decrease')){
        count--;
    }else if(styles.contains('increase')){
        count++;
    }else if(styles.contains('reset')){
        count=0;
    }
        

    if(count<0){
        value.style.color='red'
    }else if(count>0){
        value.style.color='green'
    }else{
        value.style.color='blue'
    }

    value.textContent=count;
    console.log('value',value.textContent,value.style.color);

    });
})