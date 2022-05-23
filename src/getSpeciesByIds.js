const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const array = data.species.filter((element) => ids.includes(element.id));
  return array;
}

module.exports = getSpeciesByIds;
