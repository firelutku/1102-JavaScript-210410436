const links=document.querySelectorAll('#heading a');
console.log('links',links);

const tku60Text=document.querySelector('#main ul');
console.log('tku60Links' ,tku60Text);

const heading=document.querySelector('#heading');

const iframeContainer=document.querySelector('.iframe-container');
const showImages=document.querySelector('.show-images');
const tkuImages=document.querySelector('.tku-images');

const changeColor=()=>{
    heading.style.backgroundColor="#9AADBF";
    main.style.backgroundColor="pink";
    footer.style.backgroundColor="green";
}

const changeVideo=(index)=>{
    switch(index){
        case 1:
            iframeContainer.innerHTML=`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RechrtUxfQc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
          break;
        
          case 2:
            iframeContainer.innerHTML=`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RechrtUxfQc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
          break;

          case 3:
            iframeContainer.innerHTML=`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RechrtUxfQc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
          break;

          case 4:
            iframeContainer.innerHTML=`<iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
          break;

          case 5:
            iframeContainer.innerHTML=`<iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RechrtUxfQc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
          break;

    }
}

const addTku60Text=()=>{
    tku60Text.innerHTML=`
    <li><a onclick="changeVideo(1)">???????????? 1</a></li>
            <li><a onclick="changeVideo(2)">???????????? 2</a></li>
            <li><a onclick="changeVideo(3)">???????????? 3</a></li>
            <li><a onclick="changeVideo(4)">???????????? 4</a></li>
            <li><a onclick="changeVideo(5)">???????????? 5</a></li>`;
}

const showAllImages=()=>{
    showImages.innerHTML=`
    <img src="./images/TKU1.png" width="16%" alt="" />
    <img src="./images/TKU2.png" width="16%" alt="" />
    <img src="./images/TKU3.png" width="16%" alt="" />
    <img src="./images/TKU4.png" width="16%" alt="" />
    <img src="./images/TKU5.png" width="16%" alt="" />`
}
tkuImages.classList.toggle('invisible');


links[0].addEventListener('click',changeColor);
links[1].addEventListener('click',showAllImages);
links[2].addEventListener('click',addTku60Text);