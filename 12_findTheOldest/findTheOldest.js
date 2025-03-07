const findTheOldest = function(people) {
  let oldestYear = 0;
  let oldestPerson = {};
  const currentYear = new Date().getFullYear();
  people.forEach(person => {
    let age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
    if (age > oldestYear) {
      oldestYear = age;
      oldestPerson = person;
    }
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
