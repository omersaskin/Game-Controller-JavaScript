var basla = document.getElementById("basla");
//var zipla = document.getElementById("zipla");
var restat = document.getElementById("restat");
var saldir = document.getElementById("saldir");
var yukari = document.getElementById("yukari");
var asagi = document.getElementById("asagi");
var sag = document.getElementById("sag");
var sol = document.getElementById("sol");
var gizle = document.getElementById("gizle");
var atif = document.getElementById("atif");

var sonuc=document.getElementById("sonuc");

basla.onclick = function() {

const engel=document.querySelector("#engel");
const top=document.querySelector("#top");
const restat=document.querySelector("#restat");
const dog=document.querySelector("#dog");

document.getElementById('basla').style.visibility='hidden';
document.getElementById('atif').style.visibility='hidden';
document.getElementById('sonuc').style.visibility='visible';
//document.getElementById('zipla').style.visibility='visible';
document.getElementById('gizle').style.visibility='visible';
document.getElementById('sol').style.visibility='visible';
document.getElementById('sag').style.visibility='visible';
document.getElementById('asagi').style.visibility='visible';
document.getElementById('yukari').style.visibility='visible';

var counter = 0;

    var dogSol =parseInt(window
            .getComputedStyle(dog)
            .getPropertyValue("left"));

    dog.style.left = dogSol;
    var yeniSol = dog.style.left;

    globalThis.x=yeniSol;
    globalThis.y=yeniSol+40;  

//if (counter < 9999) {
  //  setInterval(function() {
    //    counter++;
      //  sonuc.value = counter;
    //}, 1000);
//}

engel.style.display="block";
engel.classList.add("engel-animate");

sol.onclick=function() {
    //var x = document.getElementById("myAudio"); 
    //x.play(); 
    //if(engel.classList!="engel-animate")
    //{
      //  engel.classList.add("engel-animate");
   // }

    var sol=document.getElementById("sol");
    
    const dog=document.querySelector("#dog");

    var dogSol =parseInt(window
            .getComputedStyle(dog)
            .getPropertyValue("left"));

        var xso= sol.value=dogSol-25;
        if (dogSol>30) {
            dog.style.left = xso + "px";
        }
        var yeniSol = dog.style.left;

    if (dog.classList!="fadeIn") {
        globalThis.x=xso;
        globalThis.y=xso+40;  
    }
}

sag.onclick=function() {
    //var x = document.getElementById("myAudio"); 
    //x.play(); 
    //if(engel.classList!="engel-animate")
    //{
      //  engel.classList.add("engel-animate");
   // }

    var sol=document.getElementById("sol");
    
    const dog=document.querySelector("#dog");

    var dogSol =parseInt(window
            .getComputedStyle(dog)
            .getPropertyValue("left"));

    var xsa= sol.value=dogSol+25;
    if (dogSol<600) {
        var yeniSag=dog.style.left = xsa + "px";
    }

    if (dog.classList!="fadeIn") {
        globalThis.x=xsa; 
        globalThis.y=xsa+40;  
    }
}



asagi.onclick=function() {
    //var x = document.getElementById("myAudio"); 
    //x.play(); 


    //if(engel.classList!="engel-animate")
    //{
      //  engel.classList.add("engel-animate");
   // }

    var asagi=document.getElementById("asagi");
    
    const dog=document.querySelector("#dog");

    var dogBottom =parseInt(window
            .getComputedStyle(dog)
            .getPropertyValue("bottom"));

        var xy= asagi.value=dogBottom-25;
        if (dogBottom>30) {
            dog.style.bottom = xy + "px";
        }
}

yukari.onclick=function() {
    //var x = document.getElementById("myAudio"); 
    //x.play(); 


    //if(engel.classList!="engel-animate")
    //{
      //  engel.classList.add("engel-animate");
   // }

    var yukari=document.getElementById("yukari");
    
    const dog=document.querySelector("#dog");

    var dogBottom =parseInt(window
            .getComputedStyle(dog)
            .getPropertyValue("bottom"));

        var xt= yukari.value=dogBottom+25;
        if (dogBottom<270) {
        dog.style.bottom = xt + "px";
        }
}

var carpismaKontrol = function() {
    var dogBottom =parseInt(window
            .getComputedStyle(dog)
            .getPropertyValue("bottom"));

    var engelLeft =parseInt(window
            .getComputedStyle(engel)
            .getPropertyValue("left"));

    var engelTop =parseInt(window
            .getComputedStyle(engel)
            .getPropertyValue("top"));

    var engelBottom =parseInt(window
            .getComputedStyle(engel)
            .getPropertyValue("bottom"));

    var ates =parseInt(window
    .getComputedStyle(top)
    .getPropertyValue("left"));

    var atesT =parseInt(window
    .getComputedStyle(top)
    .getPropertyValue("top"));

    var atesB =parseInt(window
    .getComputedStyle(top)
    .getPropertyValue("bottom"));

    if(engelLeft<dog.style.left+40) {
        engel.classList.remove("engel-animate");

        if (engelLeft === 40) {
           engel.style.visibility="visible";
           engel.classList.add("engel-animate");
        }
    }

if (ates > engelLeft && 190<ates) {
        var sonuc=document.getElementById("sonuc");
            sonuc.value=Number(sonuc.value)+10;
    }

if (engelLeft > globalThis.x && engelLeft < globalThis.y && dogBottom < 50) {
    var sonuc=document.getElementById("sonuc");
    sonuc.value=0;
} 

gizle.onclick=function() {
    //var attack = document.getElementById("attack"); 
    //attack.play(); 

    var dogBottom =parseInt(window
            .getComputedStyle(dog)
            .getPropertyValue("bottom"));

        top.style.bottom = dogBottom + "px";

    if (status != "false") {

        if(top.classList!="top-animate")
       {
            top.style.display="block";
            top.classList.add("top-animate");
            setTimeout(function(){
                top.style.display="none";
                top.classList.remove("top-animate");
            },1000);
        }
    }   
}

//saldir.onclick=function() {

    //var y = document.getElementById("hidden"); 
    //y.play(); 

  //  if(dog.classList!="fadeIn")
    //{
      //  dog.classList.add("fadeIn");
       // setTimeout(function(){
         //   dog.classList.remove("fadeIn");
        //},1000);   
    //}
//}




    if (engelLeft > globalThis.x && engelLeft < globalThis.y && dogBottom != 30) {

        //var crash = document.getElementById("crash"); 
        //crash.play(); 
        var dogSol =parseInt(window
                .getComputedStyle(dog)
                .getPropertyValue("left"));
        //var dogBottom =parseInt(window
          //      .getComputedStyle(dog)
            //    .getPropertyValue("bottom"));
        //var sol=document.getElementById("sol");
        //var bottom=document.getElementById("bottom");

        var xso= sol.value=dogSol;
        dog.style.left = 100 + "px";

        var xb= bottom.value=dogBottom;
        dog.style.left = 30 + "px";

        document.getElementById('restat').style.visibility='visible';
        //document.getElementById('zipla').style.visibility='hidden';
        document.getElementById('gizle').style.visibility='hidden';
        document.getElementById('sol').style.visibility='hidden';
        document.getElementById('sag').style.visibility='hidden';
        document.getElementById('asagi').style.visibility='hidden';

        var status = "false";

        if(restat.classList!="restat-animate")
        {
            restat.classList.add("restat-animate");
            setTimeout(function(){
                restat.classList.remove("restat-animate");
            },1000);
        }
    }



} 

    var myVar = setInterval(carpismaKontrol,50);

    restat.onclick=function() {
if (dog.classList!="fadeIn") {
    var dogSol =parseInt(window
            .getComputedStyle(dog)
            .getPropertyValue("left"));

    globalThis.x=dogSol;
    globalThis.y=dogSol + 40;
} else {
    globalThis.x="";
    globalThis.y="";   
}
        //document.getElementById('zipla').style.visibility='visible';
        document.getElementById('gizle').style.visibility='visible';
        document.getElementById('sol').style.visibility='visible';
        document.getElementById('sag').style.visibility='visible';
        document.getElementById('asagi').style.visibility='visible';
        document.getElementById('yukari').style.visibility='visible';

        engel.classList.add("engel-animate");
        engel.style.display="block";
        document.getElementById('restat').style.visibility='hidden'; 

        counter = 0;
        var start = "true";        
    }

    //zipla.onclick=function() {
        //var x = document.getElementById("myAudio"); 
        //x.play(); 


      //  if(engel.classList!="engel-animate")
        //{
          //  engel.classList.add("engel-animate");
        //}

        //if(dog.classList!="dog-animate")
        //{
          //  dog.classList.add("dog-animate");
            //setTimeout(function(){
             //   dog.classList.remove("dog-animate");
            //},500);
        //} 
    //}

}

