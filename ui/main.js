
var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate===XMLHttpRequest.DONE){
            if(request.state===200){
                counter = counter +1;
                var span=document.getElementById('countervalue');
                span.innerHTML = counter.toString();
            }
        }
    
    }
    request.open('GET',"http://jeyasuryav.imad.hasura-app.io/counter");
    request.send(null);
    
};
