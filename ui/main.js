var counter=0;
var button=document.getElementById('counter');
button.onclick=function(){
    /*var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.state===200){
                var span = document.getElementById('countervalue');
                span.innerHTML = request.responseText;
            }
        }
    
    }
    request.open('GET',"http://jeyasuryav.imad.hasura-app.io/counter");
    request.send(null);*/
    counter=counter+1;
    var span = document.getElementById('countervalue');
    span.innerHTML=counter.toString();
    
    
};
