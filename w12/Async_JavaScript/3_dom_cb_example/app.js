const chColor1=document.querySelector('.one');
const chColor2=document.querySelector('.two');
const chColor3=document.querySelector('.three');

const btn=document.querySelector('.btn');


btn.addEventListener('click',()=>{
    setTimeout(()=>{
        chColor1.style.color = 'red';
        setTimeout(()=>{
        chColor2.style.color = 'green';
          setTimeout(()=>{
        chColor3.style.color = 'blue';
          }, 500);
        }, 2000);
      }, 3000);
      
    
});


