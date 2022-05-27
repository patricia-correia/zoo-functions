const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

function daysOpen(scheduleTarget) {
  const week = species.filter((element) => element.availability
    .find((ells) => ells === scheduleTarget));
  const on = `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`;
  if (scheduleTarget === 'Monday') {
    return {
      [scheduleTarget]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  return {
    [scheduleTarget]: {
      officeHour: on,
      exhibition: week.map((ellem) => ellem.name),
    },
  };
}

function getSchedule(scheduleTarget) {
  if (species.some((el) => el.name === scheduleTarget)) {
    return species.find((ell) => ell.name === scheduleTarget).availability;
  }
  const days = daysOpen(scheduleTarget);
  if (days !== undefined) {
    return days;
  }
}

module.exports = getSchedule;
