var faker = require('faker');

// Reference: https://www.npmjs.com/package/faker

//10 random product names and prices
console.log("====================")
console.log("Welcome to my shop!")
console.log("====================")	
for(let i = 0; i < 10; i++){
console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
}

console.log('---------------------------------------------------')

console.log(faker.fake("{{random.uuid}}"))
console.log(faker.fake("{{name.findName}}"))
console.log(faker.fake("{{internet.email}}"))
console.log(faker.internet.email())