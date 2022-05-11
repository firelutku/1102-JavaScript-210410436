const heading1 = document.querySelector('.one');
const heading2 = document.querySelector('.two');
const heading3 = document.querySelector('.thsee');


const btn = document.querySelector('.btn');



btn.addEventListener('click', async ()=>{
  const result = await displayColor();
  console.log('result', result);
});


const displayColor = async () => {
  try {
    await addColor(heading1, 1000, 'red');
    await addColor(heading2, 2000, 'green');
    await addColor(heading3, 1000, 'blue');
  } catch(err){
    console.log(err);
  }
};


const addColor = (element, time, color) => {
  return new Promise( (resolve, reject)=> {
    if(element){
      setTimeout( ()=>{
        element.style.color = color;
        resolve();
      },time)
    }else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
};

