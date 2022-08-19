let selList = document.querySelectorAll('li');

console.log(selList[0].outerText+', '+selList[4].outerText+', '+selList[1].outerText+
            ', '+selList[3].outerText+', '+selList[2].outerText);

let selListNext = document.body.children[0].children[0].outerText;//document.body.firstChild.nextSibling;            

console.log(document.body.children[0].children[0].outerText  +', '
            +document.body.children[0].children[4].outerText +', '
            +document.body.children[0].children[1].outerText +', '
            +document.body.children[0].children[3].outerText +', '
            +document.body.children[0].children[2].outerText );