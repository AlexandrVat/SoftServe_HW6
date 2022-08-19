let selList = document.querySelectorAll('p');

for (let i = 0; i < selList.length-1; ++i) {  
    console.log('Selector text '+i+': '+selList[i].textContent);
  }

/*
for (let item of selList) {
    console.log('Selector text '+item.textContent);
  }
console.log(selList);
*/  

