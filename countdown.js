//Input
var countDownDate = new Date("Feb 14, 2026 00:00:00").getTime();

var variable = setInterval(function() {
// Use today's date and time
	var now = new Date().getTime();
// Calculate the time interval
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

// Output
    var countdownElem = document.getElementById("showcountdown");
    if (countdownElem) {
        document.getElementById("showcountdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
// If the time interval is less than zero, show that the event has started  
       	if (distance < 0) {
           clearInterval(variable);
           countdownElem.innerHTML = "Happening right now";
        }
    }
// Specification in milliseconds
}, 1000);