require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use('/api', routes);

app.use((req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

if (app.get('env') === 'development') {
	app.use((err, req, res) => {
		res.status(err.status || 500);

		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

app.listen(port, () => {
	console.log(`running server...listening on port ${port}`);
});


