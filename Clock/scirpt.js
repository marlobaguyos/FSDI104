(function(){
    var updateHour = function() {
    
        var date = new Date();
        var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dev'];

        var hour = 24;
        var min = date.getMinutes();
        var sec = date.getSeconds();

        var dayOfTheWeek = date.getDay();
        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();

        var am_pm;
        if(hour < 24 && hour >= 12) {
            am_pm = 'PM';
        }
        else {
            am_pm = 'AM';
        }

        //var am_pm = hour >= 12 && hour < 24 ? "PM" : "AM";
        
        /*---Add 0 to seconds for formating---*/
        if(sec<10){
            sec="0"+sec;
        }

        /*---Convert 24 base to 12 base hour---*/
        if(hour > 12){
            hour -= 12;
        }
        else {
            hour = hour;
        }

        document.getElementById('dayweek').textContent=week[dayOfTheWeek];
        document.getElementById('month').innerHTML=months[month];
        document.getElementById('day').innerHTML=day;
        document.getElementById('year').innerHTML=year;

        document.getElementById('hour').innerHTML=hour;
        document.getElementById('min').innerHTML=min;
        document.getElementById('sec').innerHTML=sec;

        document.getElementById('ampm').innerHTML=am_pm;

    }
    //am or pm conditions

updateHour();
var inter = setInterval(updateHour,1000);
})()