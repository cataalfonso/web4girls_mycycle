const CtxCourses = require('../context/ctx-courses');
const UpdateMineView = require('../views/Student/updatemine.view');
const DeleteView = require('../views/delete.view');
const NewView = require('../views/Student/new.view');
const SearchView = require('../views/Student/search.view');
const UpdateView = require('../views/Student/update.view');
const EnrollView = require('../views/Student/enroll.view');
const Student = require('../models/student');
const Person = require('../models/person');
const User = require('../models/user');

class StudentController {
  constructor() {
    this.context = new CtxCourses();
  }

  selectAction(options, studentId) {
    let view = {};
    switch (options) {
      case 'Nuevo registro': view = new NewView(this); break;
      case 'Eliminar registro': view = new DeleteView(this); break;
      case 'Actualizar registro': view = new UpdateView(this); break;
      case 'Consultar': view = new SearchView(this); break;
      case 'Matricular': view = new EnrollView(this, studentId); break;
    }
    view.index();
  }

  get items() {
    return this.context._students;
  }

  add(student) {
    if (student) {
      let newUser = new User();
      newUser.login = student.login;
      newUser.password = student.password;
      newUser.type = student.type;
      newUser = this.context.users.add(newUser);
      let newPerson = new Person();
      newPerson.firstName = student.firstName;
      newPerson.lastName = student.lastName;
      newPerson.telephone = student.telephone;
      newPerson.adress = student.adress;
      newPerson.birthDate = student.birthDate;
      newPerson.user = newUser;
      newPerson = this.context.persons.add(newPerson);
      let newStudent = new Student;
      newStudent.emergencyContactName = student.emergencyContactName;
      newStudent.emergencyContactTel = student.emergencyContactTel;
      newStudent.person = newPerson;
      newStudent=this.context.students.add(newStudent);
      return newStudent;
    }
  }

  remove(id) {
    if (id) {
      this.context.students.remove(id);
    }
  }

  update(id, item) {
    this.context.students.update(id, item);
  }


  find(id) {
    this.context.students.findById(id);
  }

  list(criteria, compare) {
    // criteria es el nombre de la propiedad por la cual se busca, compare, el valor que estoy buscando
    return this.context.students.filter((element) => element[criteria] == compare);
  }

} 

module.exports = StudentController;