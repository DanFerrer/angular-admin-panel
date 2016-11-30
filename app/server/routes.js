const router = require('express').Router();
const request = require('request');
const url = process.env.API_BASE_URL;

router.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected!' });
});

router.get('/devices', (req, res) => {
	request(`${url}/devices`, (error) => {
		if (error) throw error;
	}).pipe(res);
});

router.get('/devices/count', (req, res) => {
	request(`${url}/devices/count`, (error) => {
		if (error) throw error;
	}).pipe(res);
});

router.get('/devices/:id', (req, res) => {
	request(`${url}/devices/${req.params.id}`, (error) => {
		if (error) throw error;
	}).pipe(res);
});

router.get('/devices/:id/readings', (req, res) => {
	request(`${url}/devices/${req.params.id}/readings`, (error) => {
		if (error) throw error;
	}).pipe(res);
});

router.post('/devices', (req, res) => {
	let options = {
		uri: `${url}/devices`,
		qs: {name: req.body.name},
		method: 'POST',
	};

	request(options, (error) => {
		if (error) throw error;
	}).pipe(res);
});

router.post('/devices/:id', (req, res) => {
	let options = {
		uri: `${url}/devices`,
		qs: {name: req.params.id},
		method: 'POST'
	};

	request(options, (error) => {
		if (error) throw error;
	}).pipe(res);
});

router.get('/readings', (req, res) => {
	request(`${url}/readings`, (error) => {
		if (error) throw error;
	}).pipe(res);
});

router.get('/readings/:id', (req, res) => {
	request(`${url}/readings/${req.params.id}`, (error) => {
		if (error) throw error;
	}).pipe(res);
});

router.post('/readings', (req, res) => {
	let options = {
		uri: `${url}/readings`,
		qs: {
			type: req.body.type,
			value: req.body.value,
		},
		method: 'POST'
	};

	request(options, (error) => {
		if (error) throw error;
	}).pipe(res);
});



module.exports = router;
