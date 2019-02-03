navigator.getBattery().then(function(battery) {

    var level = battery.level;

    document.querySelector('#level').textContent = level;
});
