var Human = function(){//相当于构造函数
    this.name = '--';//各个成员变量一定在这里声明
    this.age = 0;
};

Human.prototype.speak = function(){//类的成员方法
    console.log('my name is %s', this.name);
};

Human.prototype.profile = function(){
    console.log('profile: name=%s, age=%d', this.name, this.age);
}

var _privateMember = 999;//这样写的是私有变量，只会在这个文件内被调用

module.exports = Human;//把构造函数导出