var school = function(){
    this.name = 'dalian school';//学校的名字
    this.students = []; //学校包含的学生
}

var student = require('./student.js');
//传入一个学生名字，创建一个学生，添加到学生集合中
school.prototype.addStudentByName = function(studentName){
    var boy = new student(studentName);//因为用到了构造函数，所以必须在前面require
    this.students.push(boy);
}

school.prototype.report = function(){
    var i = this.students.length;
    for(var j = 0; j < i; j++){
        this.students[j].profile();
    }
}

module.exports = new school();