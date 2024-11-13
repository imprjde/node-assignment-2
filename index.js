const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// -- GET API with query and path parameters -- //

app.get("/api/:pathParam", (req, res) => {
  const pathParam = req.params.pathParam;
  const queryParam = req.query.queryParam;
  res.json({
    pathParam,
    queryParam,
  });
});

// -- POST API that returns JSON data as an array -- //

app.post("/api/data", (req, res) => {
  const data = req.body;

  res.json({
    info: "POST request with JSON data",
    data: Array.isArray(data) ? data : [data],
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
