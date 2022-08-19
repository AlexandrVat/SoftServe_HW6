
 let inp1 = prompt('Enter first value - '); 
 let inp2 = prompt('Enter second value - ');
 let chInput 

 let edit1 = document.getElementById("input1");
 let edit2 = document.getElementById("input2");
 edit1.value  = inp1;
 edit2.value  = inp2;

 chInput = edit1.value; 
 edit1.value = edit2.value;
 edit2.value = chInput; 
