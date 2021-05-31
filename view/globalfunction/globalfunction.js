/** 全局函数模式，把各种方法变量定义封装在这个文件中*/

(function () {
    var JSElement = document.createElement("script");
    JSElement.setAttribute("type", "text/javascript");
    JSElement.setAttribute("src", "./otherfunction.js");
    document.head.appendChild(JSElement);
}());

document.write('<script src="./otherfunction.js" type="text/javascript" charset="utf-8"></script>');

/**定义变量*/
var str5 = 'ES5变量--var';
let str6 = 'ES6变量--let';
const str7 = 'ES6常量--const';

/**定义函数*/
function funva() {
    console.log(str5)
}

function funvb() {
    console.log(str6)
}

function funvc() {
    console.log(str7);
    funother();
}