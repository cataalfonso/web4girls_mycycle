const inquirer= require('inquirer');

class UpdateView {

  constructor(_controller) {
    this.controller = _controller;
    this.questions = [
      {
        type: 'input',
        name: 'id',
        message: "Ingrese el id",
      },
      {
        type: 'input',
        name: 'firstName',
        message: "Ingrese los nombres",
      },
      {
        type: 'input',
        name: 'lastName',
        message: "Ingrese el apellido",
      },
      {
        type: 'input',
        name: 'telephone',
        message: "Ingrese el número de teléfono",
      },
      {
        type: 'input',
        name: 'adress',
        message: "Ingrese la dirección",
      },
      {
        type: 'input',
        name: 'brthdate',
        message: "Ingrese fecha de nacimiento",
      },
      {
        type: 'input',
        name: 'emergencyContactName',
        message: "Ingrese nombre del contacto de emergencia",
      },
      {
        type: 'input',
        name: 'emergencyContactTel',
        message: "Ingrese teléfono del contacto de emergencia",
      },
    ];
  }
  index(){
    console.table(this.controller.items);
    inquirer.prompt(this.questions).then((answers) => {
      this.controller.update(answers.id, answers);
      console.table(this.controller.items);
      console.log('Registro actualizado exitosamente');
    });
  }

}

module.exports = UpdateView;
