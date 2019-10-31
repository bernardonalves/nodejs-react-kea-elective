// create a 1.000.000 users with Faker
const faker = require("faker");
const fs = require("fs");

const domainNames = ["hotmail.com", "gmail.com", "outlook.com", "yahoo.pt", "coisas.pt", "netmadeira.com",
                     "protonmail.com", "myemail.com", "piercadetiempo.es"]
function createPerson(){
    var domain = domainNames[Math.floor(Math.random()*domainNames.length)];
    var name = faker.name.findName();
    var email = name.replace(/\s/g, '')+'@'+domain;
    return {
        "name": name,
        "email": email.toLowerCase(),
        "jobTitle": faker.name.jobTitle(),
        "bankAccount": faker.finance.iban()
    }
}

let loopingPeople = [];
const ammountOfPeople2Generate = 100;
for(let i=0; i<ammountOfPeople2Generate; i++){
    loopingPeople[i] = createPerson();
}

fs.writeFile("data.json", JSON.stringify(loopingPeople), function(err) {
    if (err) {
        console.log(err);
    }
});
console.log(loopingPeople);