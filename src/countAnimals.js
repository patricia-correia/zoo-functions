const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animalObject = {};
    data.species.forEach((element) => {
      (animalObject[element.name] = element.residents.length);
    });
    return animalObject;
  }
  const animalFind = data.species.find((element) => element.name === animal.specie);
  if (animal.sex) {
    const animalFilter = animalFind.residents.filter((element) => element.sex === animal.sex);
    return animalFilter.length;
  }
  return animalFind.residents.length;
}

module.exports = countAnimals;
