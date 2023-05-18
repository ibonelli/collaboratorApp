const express = require('express')
const morgan = require("morgan");
const cors = require("cors");
const port = process.env.PORT || 3000

const app = express()

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Endpoints
app.use('/api', require('./api/collaborator').router)

app.listen(port, () => {
	console.log('Listening on port: ' + port)
})
