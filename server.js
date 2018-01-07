const express = require('express');
const paperjs = require('paper');
const app     = express();
const PORT    = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(PORT, () => {
	console.log('patatap clone is listening on ' + PORT);
});
