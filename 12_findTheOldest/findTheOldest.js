function findTheOldest(people) {
    let oldestPerson = people[0];
    let maxAge = calculateAge(people[0]);

    for (let i = 1; i < people.length; i++) {
        const person = people[i];
        const age = calculateAge(person);

        if (age > maxAge) {
            maxAge = age;
            oldestPerson = person;
        }
    }

    return oldestPerson;
}

function calculateAge(person) {
    const currentYear = new Date().getFullYear();
    if (person.yearOfDeath !== undefined) {
        return person.yearOfDeath - person.yearOfBirth;
    } else {
        return currentYear - person.yearOfBirth;
    }
}

// Do not edit below this line
module.exports = findTheOldest;
