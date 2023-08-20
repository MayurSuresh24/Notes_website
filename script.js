function displayTime(){

    var datetime=new Date();
    var hr=datetime.getHours();
    var mi=datetime.getMinutes();
    var se=datetime.getSeconds();
    var sessio="AM";
    if(hr>12){
        hr=hr-12;
       sessio="PM";
    }
    document.getElementById("hrs").innerHTML=hr;
    document.getElementById("mins").innerHTML=mi;
    document.getElementById("secs").innerHTML=se;
    document.getElementById("session").innerHTML=sessio;
}
setInterval(displayTime,1000);

