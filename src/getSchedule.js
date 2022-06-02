const data = require('../data/zoo_data');

const hourOfDay = Object.values(data.hours);

const days = Object.keys(data.hours);

const animalTheZoo = data.species
  .map((animal) => animal.name);

const hoursItinerary = (daysWeekOpen) => {
  const weekCalendar = {};
  if (daysWeekOpen === 'Monday') {
    weekCalendar.officeHour = 'CLOSED';
    weekCalendar.exhibition = 'The zoo will be closed!';
  } else {
    const daysOpening = hourOfDay
      .find((hour, index) => days[index] === daysWeekOpen);
    const specie = data.species
      .filter((element) => element.availability
        .find((elle) => elle === daysWeekOpen));
    weekCalendar.officeHour = `Open from ${daysOpening.open}am until ${daysOpening.close}pm`;
    weekCalendar.exhibition = specie.map((element) => element.name);
  }
  return weekCalendar;
};

const scheduleWeek = () => days.reduce((acc, curr) =>
  ({
    ...acc,
    [curr]: hoursItinerary(curr),

  }), {});

const animals = (animal) => data.species.find((specie) =>
  specie.name === animal);

const day = (param) => ({ [param]: hoursItinerary(param) });

function getSchedule(scheduleTarget) {
  if (animalTheZoo.includes(scheduleTarget)) {
    return animals(scheduleTarget).availability;
  } if (days.includes(scheduleTarget)) {
    return day(scheduleTarget);
  }
  return scheduleWeek();
}
// {
//    'Tuesday': {
//        'officeHour': 'Open from 8am until 6pm',
//        'exhibition': ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
//      },
// };

module.exports = getSchedule;
