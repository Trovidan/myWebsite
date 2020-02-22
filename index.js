var pos1=1000;
var pos2=355;
var to=100;
var lt=1000;

function moveCloud(){
  //var ele1 = $(".top-cloud");
  var ele2 = $(".bottom-cloud");
  // if(pos1>1500){
  //   pos1=-200;
  // }
  // else{
  //   pos1+=0.2;
  //   ele1.css('left',pos1+"px")
  // }
  if(pos2>1500){
    pos2=-300;
  }
  else{
    pos2+=0.20;
    ele2.css('left',pos2+"px")
  }
}

var namePos1=0;
var namePos2=100;

function moveName2(){
  var name2=$(".name2");
  var name1=$(".name");
  if(namePos2>49){
    namePos2-=0.6;
    name2.css('left',namePos2+"%");
  }
  if(namePos1<40){
    namePos1+=0.5;
    name1.css('left',namePos1+"%");
  }
  if(namePos1>=40 && namePos2<=49){
    clearInterval(c);
  }
}

var counter = 0;
// 100 iterations
var increase = Math.PI / 10000;
var ele=$(".top-cloud");
var i=0;
var x=0;
var y=0;
function moveHeading(){
  x = i;
  y =  Math.sin( counter )*100 ;
  counter += increase;
  if(lt+x>1500){
    lt=-200;i=0;
  }
  ele.css('top',to + y + "px");
  ele.css('left',lt+ x + "px");
  console.log("running");
  i+=.2;
}
var b=setInterval(moveCloud,5);
//var c=setInterval(moveName2,10);
var d=setInterval(moveHeading,5);
