const bt=document.querySelector('.btn');
const url='./api/people.json';

btn.addEventListener('click',()=>{
    getData(url);
});

function getData(){
    const xhr=new XMLHttpRequest();
    console.log('xhr0',xhr);

    xhr.open('GET',url);
    xhr.onreadystatechange=function(){
        console.log('xhr',xhr);
        if(xhr.readyState===4 && xhr.status===200){
            const data=JSON.parse(xhr.responseText);
            console.log('data',data);
            const displayData=data.map((item)=>{
                return `<p>${item.name}</p>`;
            })
            .join('');

            console.log('displayData',displayData);
        }else{
            console.log({
                status:xhr.status,
                text:xhr.statusText,
            });
        }
    };
}




xhr.open('GET','./api/sample')