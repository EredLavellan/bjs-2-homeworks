function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];

}

let student1 = new Student("Tony", "male", 37);
let student2 = new Student("Buzz", "female", 35);


Student.prototype.setSubject = function (subjectName) {
    return this.setSubject = subjectName;

}

Student.prototype.addMarks = function (...marks) {
  if(this.marks === undefined){
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }

}

Student.prototype.getAverage = function () {
  if(this.marks === undefined){
        return 'Нет оценок';
    } else {
        return this.marks.reduce( ( a, v ) => a + v, 0 ) / this.marks.length;
    }

}

Student.prototype.exclude = function (reason) {
  delete this.marks;
delete this.subject;
this.excluded = reason;

}
