const express = require('express');
const app = express();

app.use(express.json());

const routes = require('./routes/route');
routes(app);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening to port http://localhost:${port}`);
});