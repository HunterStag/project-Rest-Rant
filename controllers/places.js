const router = require('express').Router()

// console.log("In controller before index func") 
router.get('/',(req,res) => {
	// console.log("In controller in index func") 
	let places = [{
		name: 'H-Thai-ML',
		city: 'Seattle',
		state: 'WA',
		cuisines: 'Thai, Pan-Asian',
		pic: 'http://placekitten.com/250/250'
		}, {
		name: 'Coding Cat Cafe',
		city: 'Phoenix',
		state: 'AZ',
		cuisines: 'Coffee, Bakery',
		pic: 'http://placekitten.com/250/250'
		}];

    res.render('places/index', {places});
});

module.exports = router
