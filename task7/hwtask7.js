let main = document.createElement('main');
main.className = 'mainClass check item';
document.body.append(main);

let div = document.createElement('div');
div.id = 'myDiv';

main.prepend(div);

let par = document.createElement('p');
par.innerHTML = 'First paragraph';

div.prepend(par);