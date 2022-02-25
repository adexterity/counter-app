var add= document.querySelector(".add");
var subtract= document.querySelector(".subtract");
var reset= document.querySelector(".reset");
var num=0;
var display= document.querySelector('.display');

add.addEventListener('click', function(){
  num++;
  if(num > 0){
      display.style.color="green";
  }else if(num === 0){
    display.style.color="#d35400";   
} 
  display.textContent=num;

 
})
subtract.addEventListener('click', function(){
    num--;
    if(num < 0){
        display.style.color="red";
    }else if(num === 0){
        display.style.color="#d35400";   
    }

    display.textContent=num;

})
reset.addEventListener('click', function(){
    num=0;
    if(num === 0){
        display.style.color="#d35400";   
    }
    display.textContent=num;

})