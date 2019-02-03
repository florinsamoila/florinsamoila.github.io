var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

navigator.getBattery().then(function(battery) {
    var level = battery.level*100;
    document.querySelector('#level').textContent = level+"%";
    var charging = battery.charging;
    if (charging==true){
        document.querySelector('#charging').textContent = "Charging" ;
    }
    if (charging==false){
        document.querySelector('#charging').textContent = "Discharging" ;
        ctx.beginPath();
        ctx.lineWidth = "6";
        ctx.strokeStyle = "red";
        ctx.rect(5, 5, 290, 140); 
        ctx.stroke();
    }
});
