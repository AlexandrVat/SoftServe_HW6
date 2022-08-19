let head = document.querySelector('h1');
head.className = 'firstHead';

let selList = document.querySelectorAll('p');

selList[0].className = 'firstpar';
selList[1].className = 'secondpar';
selList[2].className = 'thirdpar';
selList[3].className = 'fourthpar';

let spanlist = document.querySelector('span');

spanlist.className = 'ghost'

let listToStr = document.getElementById("myList");
let strSp = '';

for (let i = 0; i < listToStr.children.length; ++i) {  
    strSp += listToStr.children[i].textContent;
  }

  listToStr.innerHTML =  strSp;


