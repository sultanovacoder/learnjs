'use strict';

function buyMouse() {
    this.price = 0;
    var COMPANY = 'dell';
    this.buttons_amount = 2;
    this.material = 'metal';
    var self = this;
    self.basebuttons = function () {
        return 3;
    };

    this.outputbuttons = function (){
        return this.buttons_amount + self.basebuttons();
    };
}

var mouse = new buyMouse();
alert (mouse.outputbuttons());