navigator.getBattery().then(function(battery) {
    var level = battery.level*100;
    document.querySelector('#level').textContent = level+"%";
    var charging = battery.charging;
    document.querySelector('#charging').textContent = charging ;
});
