const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees
    .some((managersId) => managersId.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    return employees.filter((employee) => employee.managers
      .includes(managerId))
      .map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
