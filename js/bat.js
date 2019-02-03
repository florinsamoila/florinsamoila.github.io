navigator.getBattery().then(function(battery) {

    var level = battery.level*100;

    document.querySelector('#level').textContent = level+"%";
});
