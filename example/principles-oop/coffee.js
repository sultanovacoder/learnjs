"use strict";
function Coffee(power) {
    this.waterAmount = 0;

    //расчёт времени для кипячения

    var WATER_HEAT = 4200; //константа js

    function getBoilTime() {
        return WATER_HEAT*this.waterAmount*80/power; //здесь будет формула расчёта // ошибка
    }

    // что делать по окончании процесса
    function onReady(){
        alert('Кофе готов');
    }

    this.run = function () {
        // setTimeout - встроенная функция,
        // она запустит onReady через getBoilTime() миллисекунд
        setTimeout(onReady,getBoilTime.call(this));
    };
}

//создать кофеварку
var coffee = new Coffee(100000);

//залить воды
coffee.waterAmount = 200;
coffee.run();