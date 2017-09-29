
var button=document.getElementById('counter');
button.onclick=function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200)
            {
                var span = document.getElementById('countervalue');
                span.innerHTML = request.responseText.toString();
            }
        }

    };
    request.open('GET',"/counter");
    request.send(null);
  };
  var form=document.getElementById('comment-form');
  form.onsubmit=function(e){
    
    e.preventDefault();
var request1= new XMLHttpRequest();
  var name =  form.nameInput.value;
    console.log(name);
    request1.onreadystatechange = function(){
      if(request1.readyState===XMLHttpRequest.DONE){
        if(request1.status===200){
          var names=[];
        names=JSON.parse(request1.responseText);
        var list='';
        for(var i=0;i<names.length;i++)
        list +='<li>'+names[i]+'</li>';
        var ul=document.getElementById('nameList');
        ul.innerHTML=list;
       }
     }
     this.reset();
    };
    request1.open('GET',"/submit-name?name="+name);
    request1.send(null);
  };
    /*counter=counter+1;
    var span = document.getElementById('countervalue');
    span.innerHTML=counter.toString();*/
