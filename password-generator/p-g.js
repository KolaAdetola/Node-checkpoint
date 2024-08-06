var generator = require('generate-password');

var password = generator.generate({
	length: 1,
	numbers: true,
    symbols: true,
    uppercase: true,
    // strict: true
});
console.log(password);