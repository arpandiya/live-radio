


var live = document.getElementById("myLive"); 

function play() { 
  live.play(); 
  document.getElementById('play-img').src="/images/pause.png";
  
  
} 

function pause() { 

  live.pause();
  document.getElementById('play-img').src="/images/play.png";

} 

 function myPlay(){
    live.pause();
} 


