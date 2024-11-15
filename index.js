const express = require("express");
const morgan = require("morgan");
const logger = require("./utils/logger");
const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

// -- GET API with query and path parameters -- //

app.get("/api/:pathParam", (req, res) => {
  const pathParam = req.params.pathParam;
  const queryParam = req.query.queryParam;

  // Logging the details of the GET request
  logger.info("GET Request received", {
    endpoint: "/api/:pathParam",
    method: req.method,
    pathParam,
    queryParam,
  });

  res.json({
    message: `Received path parameter: ${pathParam} and query parameter: ${queryParam}`,
    pathParam,
    queryParam,
  });
});

// -- POST API that returns JSON data as an array -- //

app.post("/api/data", (req, res) => {
  const data = req.body;

  // Logging the incoming POST request details
  logger.info("POST Request received", {
    endpoint: "/api/data",
    method: req.method,
    requestBody: data,
  });

  res.json({
    info: "POST request with JSON data",
    data: Array.isArray(data) ? data : [data],
  });
});

app.listen(port, () => {
  logger.info(`Server is running on http://localhost:${port}`);
});
