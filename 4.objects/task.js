function Student(name, gender, age) {
    return {
    name,
    gender,
    age,
    marks: []
  }
  
}

Student.prototype.setSubject = function (subjectName) {
    return this.setSubject = subjectName;
  
}

Student.prototype.addMarks = function (...marks) {
  
}

Student.prototype.getAverage = function () {
  
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
delete this.subject;
this.excluded = reason;
  
}
