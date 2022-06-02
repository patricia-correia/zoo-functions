const { hours } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const daysOpen = species
    .filter((element) => scheduleTarget === element.animal);
  return daysOpen;
}
// {
//    'Tuesday': {
//        'officeHour': 'Open from 8am until 6pm',
//        'exhibition': ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
//      },
// };
console.log(getSchedule('Tuesday'));

module.exports = getSchedule;
