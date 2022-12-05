const express = require("express");
const app = express();
const userRouter = require("./routes/route");
app.use(express.json());
app.use("/user", userRouter);
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});
