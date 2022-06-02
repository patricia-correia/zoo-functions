const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees
    .find((ellement) => ellement.id === id);
  const animal = employee.responsibleFor[0];
  const specie = data.species
    .find((ell) => ell.id === animal).residents;
  const oldAnimal = specie.reduce((acc, curr) =>
    (curr.age > acc.age ? curr : acc));
  return Object.values(oldAnimal);
}

module.exports = getOldestFromFirstSpecies;
