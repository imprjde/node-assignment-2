# Express Server with GET and POST APIs

This project demonstrates a simple Express server with two APIs:

## APIs

1. **GET `/api/:pathParam`**  
   - Returns path and query parameters as a JSON response.
   - Example: `GET /api/test?queryParam=value`

2. **POST `/api/data`**  
   - Accepts JSON data and returns the data as an array.
   - Example Request Body: `{ "name": "John", "age": 30 }`
