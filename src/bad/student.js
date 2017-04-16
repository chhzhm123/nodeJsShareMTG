var student = function(sname){
    this.name = sname;
}

student.prototype.profile = function(){
    console.log('my name is %s', this.name);
}

module.exports = student;