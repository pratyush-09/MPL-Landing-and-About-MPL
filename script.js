//Text for ZERO Countdown
var textforLive=document.querySelector(".start");

// Set the date we're counting down to
var countDownDate = new Date("Sept 28, 2020 20:29:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days1").innerHTML = 0 ;
  document.getElementById("days2").innerHTML = days;
  document.getElementById("hours1").innerHTML=Math.floor(hours/10);
  document.getElementById("hours2").innerHTML=(hours%10);
  document.getElementById("minutes1").innerHTML=Math.floor(minutes/10);
  document.getElementById("minutes2").innerHTML=(minutes%10);
  document.getElementById("seconds1").innerHTML=Math.floor(seconds/10);
  document.getElementById("seconds2").innerHTML=(seconds%10);

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days1").innerHTML = 0 ;
    document.getElementById("days2").innerHTML = 0;
    document.getElementById("hours1").innerHTML=0;
    document.getElementById("hours2").innerHTML=0;
    document.getElementById("minutes1").innerHTML=0;
    document.getElementById("minutes2").innerHTML=0;
    document.getElementById("seconds1").innerHTML=0;
    document.getElementById("seconds2").innerHTML=0;
    textforLive.innerText="MPL is live!"
  }
}, 1000);