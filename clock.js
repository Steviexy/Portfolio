var morning = 00;
var noon = 12;
var night = 18;
var paragraph = document.getElementById("greetings");
var body = document.getElementById("parent");


function showTime () {
    var clock = document.getElementById("clock");
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridan = "AM";
    if (hours >= noon) {
        meridan = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours === morning) {
        hours = 12;
        meridian = "AM";
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var digitalClock = hours + ":" + minutes + ":" + seconds +""+ meridan;
    clock.innerText = digitalClock;
}
showTime();


function updateClock() {
    var time = new Date().getHours();
    if (time < 12) {
        paragraph.innerHTML ="Good morning, Have a lovely day!";
    } else if (time < 18) {
        paragraph.innerHTML = "It's a beautiful afternoon";
    } else if (time > 18) {
        paragraph.innerHTML = "what a day! Time to relax";
        body.style.color = "white";
        console.log(paragraph);
    }
    showTime();
    var oneSecond = 1000;
    setInterval(showTime,oneSecond);
}
updateClock();


 var alarmHour = document.getElementById("hour");
 var alarmMin = document.getElementById("minutes");
 var alarmSec = document.getElementById("seconds");
 var alarmZone = document.getElementById("zone");
 var activeAlarm = document.getElementById("active-alarm");
 var alarmString = document.createElement("p");
 var alarm = document.createElement("P");

function getAlarm () {
    var setHour = alarmHour.Value;
    var setMin = alarmMin.value;
    var setSec = alarmSec.value;
    var setZone = alarmZone.value;
    var alarm  = {
        hr: setHour,
        min: setMin,
        sec: setSec,
        zone: setZone
    };
    alarmString.innerText = alarmHour.value + ":" + alarm.min + ":" + alarm.sec + ":" + alarm.zone;
    activeAlarm.appendChild(alarmString);
}
getAlarm();


function setAlarm() {
   var date = new Date();
   var presentHour = date.getHours();
   var presentMin = date.getMinutes();
   var presentSec = date.getSeconds();
   var presentZone = "AM";
   if (presentHour > 12) {
       presentHour = presentHour - 12;
       presentZone = "PM";
   }else if (presentHour === 0) {
             presentHour = 12;
             presentZone = "AM"
   }
   var hourAlarm = alarmHour.value;
   var minAlarm = alarmMin.value;
   var secAlarm = alarmSec.value;
   var zoneAlarm = alarmZone.value;
   
   if(presentHour === parseInt(hourAlarm)) {
       if(presentMin === parseInt(minAlarm)) {
           if(presentSec === parseInt(secAlarm)) {
               if(presentZone === zoneAlarm) {
               alarm.innerText = "Hurray!!!"
               activeAlarm.appendChild(alarm);
               }
           }
       }
   }
}
