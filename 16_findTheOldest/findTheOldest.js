const findTheOldest = function(array) {
    const arrayWithAge = array.map(person=>{
        if (person.yearOfDeath == undefined) {
            person["yearOfDeath"] = new Date().getFullYear()
        }
        const calcAge = person.yearOfDeath-person.yearOfBirth;
        return {...person, age: calcAge}
    });
    const arraywithAgeSorted = arrayWithAge.sort((a,b)=>a.age-b.age);
    const oldestPerson = arraywithAgeSorted.at(-1);
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
