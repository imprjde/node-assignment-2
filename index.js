const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(morgan("dev"));
app.use(express.json());

// -- GET API with query and path parameters -- //

app.get("/api/:pathParam", (req, res) => {
  const pathParam = req.params.pathParam;
  const queryParam = req.query.queryParam;

  // Below code logs the details of the incoming GET request
  console.log("GET Request received");
  console.log("Path Parameter:", pathParam);
  console.log("Query Parameter:", queryParam);

  res.json({
    message: `Received path parameter: ${pathParam} and query parameter: ${queryParam}`,
    pathParam,
    queryParam,
  });
});

// -- POST API that returns JSON data as an array -- //

app.post("/api/data", (req, res) => {
  const data = req.body;

  // Log the incoming POST request details
  console.log("POST Request received");
  console.log("Request Body:", JSON.stringify(data, null, 2));

  res.json({
    info: "POST request with JSON data",
    data: Array.isArray(data) ? data : [data],
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
