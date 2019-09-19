// create a 1.000.000 users with Faker
const faker = require("faker");
const domainNames = ["hotmail.com", "gmail.com", "outlook.com", "yahoo.pt", "coisas.pt", "netmadeira.com"]
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

console.log(createPerson());