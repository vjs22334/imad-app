var counter=0;
var button=document.getElementById('counter');
var span=document.getElementById('countervalue');
button.onclick=function(){
    
    span.innerHTML=counter.toString();
};
