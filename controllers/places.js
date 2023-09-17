const router = require('express').Router()

// More code here in a moment

module.exports = router

router.get('/', (req, res) => {
	res.send('GET /places')
})	
