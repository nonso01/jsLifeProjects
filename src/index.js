'use strict';
//short hands
const csl=(x)=>console.log(x);
const dc=(x)=>document.createElement(x);
const dq=(x)=>document.querySelector(x);
const dqA=(x)=> document.querySelectorAll(x);
//end short hand

const body= dq('body');
const header= dq('#Hd');
const darkLight=dq('#darkLight');
const cards= dq('#cards');

let clicks=0;



const cardContents=[
 {
  img: '/img_ico/form.svg',
  hText:'Product management',
  sText:'30 available vacancy.'
 },
  {
  img: '/img_ico/duplicate.svg',
  hText:'Web and mobile development',
  sText:'28 available vacancy.'
 },
  {
   img: '/img_ico/form.svg',
   hText: 'customer support',
   sText: '25 available vacancy.'
  },
  {
   img: '/img_ico/duplicate.svg',
   hText: 'Human resources',
   sText: '29 available vacancy.'
  },
 {
   img: '/img_ico/form.svg',
   hText: 'Design & creative',
   sText: '27 available agency.'
  },
 {
   img: '/img_ico/duplicate.svg',
   hText: 'Marketing & communication',
   sText: '20 available agency'
  },
  {
   img: '/img_ico/form.svg',
   hText: 'Business development',
   sText: '30 available agency.'
  },
 {
  img: 'src',
  hText: '+4 more',
  sText: '15 available agency.'
 },
 ];

function cardElem(){
 for(let i=0; i<cardContents.length;i++){
 let cd= dc('div');
 cd.classList.add('cd');
 cd.setAttribute('id','cd'+i);
 cards.appendChild(cd);
 }
 
 const cd= dqA('.cd');
 
cd.forEach(function(elem){
 const image=dc('img');
 image.setAttribute('src','');
 image.setAttribute('width','40px');
  image.setAttribute('height','40px');
  image.setAttribute('alt','svg');
const hText=dc('h3');
const sText=dc('span');
elem.appendChild(image);
elem.appendChild(hText);
elem.appendChild(sText);

//place the contents
switch(elem.id){
 case 'cd0':
  image.src=cardContents[0].img;
  hText.textContent=cardContents[0].hText;
  sText.textContent=cardContents[0].sText;
  break;
  case 'cd1':
   image.src=cardContents[1].img;
   hText.textContent=cardContents[1].hText;
   sText.textContent=cardContents[1].sText;
   break;
  case 'cd2':
  image.src = cardContents[2].img;
  hText.textContent = cardContents[2].hText;
  sText.textContent = cardContents[2].sText;
  break;
  case 'cd3':
  image.src = cardContents[3].img;
  hText.textContent=cardContents[3].hText;
  sText.textContent =cardContents[3].sText;
  break;
  case 'cd4':
  image.src = cardContents[4].img;
  hText.textContent = cardContents[4].hText;
  sText.textContent = cardContents[4].sText;
  break;
  case 'cd5':
  image.src = cardContents[5].img;
  hText.textContent = cardContents[5].hText;
  sText.textContent = cardContents[5].sText;
  break;
  case 'cd6':
  image.src = cardContents[6].img;
  hText.textContent = cardContents[6].hText;
  sText.textContent = cardContents[6].sText;
  break;
  case 'cd7':
  elem.removeChild(image);
  hText.textContent = cardContents[7].hText;
  sText.textContent = cardContents[7].sText;
  break;
}

});

}
cardElem();


//circles on header
/*function headerAnimation(){
 let headerWidth= 600//600px

 for(let i=1; i<11; i++){
 let circles=document.createElement('i');
 circles.classList.add('cil'+i);
 circles.classList.add('cil');
 header.appendChild(circles);
}

const circles= document.querySelectorAll('.cil');
}
headerAnimation();
*/



function darkWhiteMode(){
 darkLight.addEventListener('click',function(){
  clicks++
  if(clicks%2!==0){
   body.setAttribute('id','dark');
   this.src='/img_ico/moon.svg'
  }
 else{
  body.removeAttribute('id','dark');
  this.src='/img_ico/sun.svg'
 }
  csl(clicks)
 })
}

darkWhiteMode();

