var Human = require('./ooSuperClass.js');//获取父类的构造函数方法

var Jake = function(){//自己的类，将要让它集成自Human
    Human.call(this);//一定要这一句，把父类的构造函数也执行一下

    this.name = 'Jake';//可以覆盖父类的成员，也可以新增加特有的成员
    this.glass = true;//特有的属性
}

Jake.prototype.basketBall = function(){//记住，在面向对象的前提下，添加可被其他人继承的方法，必须走 prototype
    console.log('basketBall, glass=%s', this.glass);
}

var util = require('util');//实现继承功能的神器
util.inherits(Jake, Human);//世界在这一瞬改变,Jake变成人类了！

module.exports = Jake;

