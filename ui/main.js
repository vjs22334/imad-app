
var button=document.getElementById('counter');
var span=document.getElementById('countervalue');
button.onclick=function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readystate===XMLHttpRequest.DONE){
            if(request.state===200){
                var counter = request.responseText;    
                span.innerHTML = counter.toString();
            }
        }
    
    }
    request.open('GET',"http://jeyasuryav.imad.hasura-app.io/counter");
    request.send(null);
    
};
