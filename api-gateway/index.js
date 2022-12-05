const express = require("express"),
    bodyParser = require("body-parser"),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const port = process.env.PORT || 3000;
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Gateway API",
            version: "0.1.0",
            description:
                "This is a simple CRUD API application made with Express and documented with Swagger",
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: [
        "./routes/user.js",
        "./routes/series.js",
    ],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
const { USER_API_URL, SERIES_API_URL } = require("./URLs");

const userProxy = createProxyMiddleware({
    target: USER_API_URL,
    changeOrigin: true,
    logger: console,
});

const seriesProxy = createProxyMiddleware({
    target: SERIES_API_URL,
    changeOrigin: true,
    logger: console,
});

app.use("/user", userProxy);
app.use("/series", seriesProxy);

app.listen(port, () => {
    console.log(`Listening to port http://localhost:${port}`);
});
