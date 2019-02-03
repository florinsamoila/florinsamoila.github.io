navigator.getBattery().then(function(battery) {
    var level = battery.level*100;
    document.querySelector('#level').textContent = level+"%";
    var charging = battery.charging;
    if (charging==true){
    document.querySelector('#charging').textContent = "Charging" ;
    }
    if (charging==false){
    document.querySelector('#charging').textContent = "Discharging" ;
    }
});
