var updateHour = function() {
    
    var date = new Date();
    
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    var ampm;

    var dayOfTheWeek = date.getDay();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();

    document.getElementById('dayweek').textContent=dayOfTheWeek;
    document.getElementById('month').innerHTML=month;
    document.getElementById('day').innerHTML=day;
    document.getElementById('year').innerHTML=year;

    document.getElementById('hour').innerHTML=hour;
    document.getElementById('min').innerHTML=min;
    document.getElementById('sec').innerHTML=sec;

}

updateHour();