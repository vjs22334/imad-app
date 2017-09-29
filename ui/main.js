
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
  var comment =  form.comment.value;
    console.log(name);
    request1.onreadystatechange = function(){
      if(request1.readyState===XMLHttpRequest.DONE){
        if(request1.status===200){
        /*  var c={
              names:[],
              comments:[]
          };*/
        var carea=JSON.parse(request1.responseText)
        /*for(var i=0;i<c.names.length;i++)
        carea +=`<p>${c.comments[i]}+
        by${c.names[i]}</p><hr/>`;*/
        var commentarea=document.getElementById('carea');
        commentarea.innerHTML=carea;
       }
     }
     form.reset();
    };
    request1.open('GET',"/submit-name?name="+name+"&comment="+comment);
    request1.send(null);
  };
    /*counter=counter+1;
    var span = document.getElementById('countervalue');
    span.innerHTML=counter.toString();*/
