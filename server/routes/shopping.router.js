const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
	// Get all of the treats from the database
	const sqlText = `SELECT * FROM shoplist`;
	pool.query(sqlText)
			.then((result) => {
					res.send(result.rows);
			})
			.catch((error) => {
					console.log(`Error making database query ${sqlText}`, error);
					res.sendStatus(500);
			});
});

router.post('/', (req, res) => {
	const shoplist = req.body;
	console.log(shoplist);
	const sqlText = `
  INSERT INTO "shoplist" 
  ("name", "quantity", "unit")
  VALUES
  ($1, $2, $3)
  `;
	const sqlValues = [shoplist.name, shoplist.quantity, shoplist.unit];

	pool
		.query(sqlText, sqlValues)
		.then((dbRes) => {
			res.sendStatus(201);
		})
		.catch((dbErr) => {
			console.log('error posting to DB', dbErr);
		});
});

module.exports = router;
