"use strict";
var fruits = ["mara", "tana", "lena"];

var question=prompt('введите имя','');
var name;
switch (question){
    case 'Маря':
        name=fruits[0];
        break;
    case 'Таня':
        name=fruits[1];
        break;
    case 'Лена':
        name=fruits[2];
        break;
}

name ? alert('vk.com/' + name) : alert ('хуй вам а не ссылка');
name='';

document.getElementById('getname');
document.getElementById('btn_url');
var lblurl = document.getElementById('lbl_url');
function f(arg1,arg2,...)
{
    /* тело функции */
}
Здесь следует обратить внимание на следующие моменты. Во-первых, function определяет переменную с именем f. Эта переменная имеет тип function:

document.write('Тип переменной f: '+ typeof(f));
// Будет выведено: Тип переменной f: function
Во-вторых, эта переменная, как и любая другая, имеет значение - свой исходный текст:

    var i=5;

function f(a,b,c)
{
    if (a>b) return c;
}

document.write('Значение переменной i: '+ i.valueOf());

// Будет выведено:
// Значение переменной i: 5

document.write('Значение переменной f:<BR>'+ f.valueOf());

// Будет выведено:
// Значение переменной f:
// function f(a,b,c)
// {
//  if (a>b) return c;
// }