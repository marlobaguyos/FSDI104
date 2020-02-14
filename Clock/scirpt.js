(function(){
    var updateHour = function() {
    
        var date = new Date();
        var week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dev'];

        var hour = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        var ampm;

        var dayOfTheWeek = date.getDay();
        var month = date.getMonth();
        var day = date.getDate();
        var year = date.getFullYear();

        if(sec<10){
            sec="0"+sec;
        }

        document.getElementById('dayweek').textContent=week[dayOfTheWeek];
        document.getElementById('month').innerHTML=months[month];
        document.getElementById('day').innerHTML=day;
        document.getElementById('year').innerHTML=year;

        document.getElementById('hour').innerHTML=hour;
        document.getElementById('min').innerHTML=min;
        document.getElementById('sec').innerHTML=sec;

    }
    //am or pm conditions

updateHour();
var inter = setInterval(updateHour,1000);
})()