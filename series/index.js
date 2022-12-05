const express = require("express");
const app = express();
const seriesRouter = require("./routes/route");
app.use(express.json());
app.use("/series", seriesRouter);
const port = process.env.PORT || 3002;
app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});
