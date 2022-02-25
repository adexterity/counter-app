var btn= document.querySelector('.btn');
var numb=document.querySelector('#numb');

btn.addEventListener('click', function(){
    
    var numbers= Math.floor(Math.random() * 1000);
    numb.value= numbers;
})