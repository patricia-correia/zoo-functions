const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) {
    return {};
  }
  return data.employees
    .find((ells) => employeeName === ells.firstName || employeeName === ells.lastName);
}

module.exports = getEmployeeByName;
