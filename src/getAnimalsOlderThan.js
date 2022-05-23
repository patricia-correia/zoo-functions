const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return data.species.find((ell) => ell.name === animal).residents
    .every((obj) => obj.age >= age);
}

module.exports = getAnimalsOlderThan;
