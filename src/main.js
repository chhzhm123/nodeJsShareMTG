/*
nodejs从入门到放弃
*/
console.log('Jake you !');

/*
* 打印调试信息
*/
var print = function(msg){
    //console.log('debug: %s', msg);
}

var debug = false;
if(debug){
    print('Jake');
}else{
    print('Fake');
}


/*var obj  = require('./exportObj.js');
console.dir(obj);*/

var obj = require('./exportFunction.js');
console.dir(obj);
/*obj.call();
obj();*/
/*obj.fun1.call();
obj.fun2.call();/**/

// var Jake = require('./ooChildClass.js');
// var boy =  new Jake();//通过构造函数来创建一个类
// //开始验证他的若干方法
// boy.profile();//执行了父类的方法
// boy.speak();//父类的方法
// boy.basketBall();//子类特有

var schoolFunction = require('./bad/school.js');
var school = new schoolFunction();
school.addStudentByName('JakeQiang');
school.report();