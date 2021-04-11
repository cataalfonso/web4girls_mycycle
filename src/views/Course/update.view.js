const CourseController = require("../../controllers/course.controller");

class UpdateView {

  constructor() {
    this.controller = new CourseController();
    this.questions = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id del  curso",
      },
      {
        type: 'input',
        name: 'name',
        message: "Ingrese el nombre del  curso",
      },
      {
        type: 'input',
        name: 'duration',
        message: "Ingrese la duración del curso en meses",
      },
    ];
  }
  index(){
    console.table(this.controller.items);
    inquirer.prompt(this.questions).then((answers) => {
      this.controller.update(answers.id, answers);
      console.table(this.controller.items);
      console.log('Curso actualizado exitosamente');
    });
  }

}

module.exports = UpdateView;
