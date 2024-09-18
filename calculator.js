let display=document.getElementById('inputcontainer')
let button=document.querySelectorAll('button')
// make array of the buttonarray
let buttonarray=Array.from(button)
let string =''
// now we want every value of array assign to varaiable
buttonarray.forEach(function(btn){
    btn.addEventListener('click',function(event){

    if(event.target.innerHTML=='DEL'){
        string=string.substring(0,string.length-1)
        display.value=string
    }else if(event.target.innerHTML=='AC'){
        string='' 
        display.value=string
    }
    else if((event.target.innerHTML=='=')){
        string=eval(string)
        display.value=string
        

    }
      else{
// it display the text on display
        string+=event.target.innerHTML;
        display.value=string
      }
       
    })
})