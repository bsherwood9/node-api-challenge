require("dotenv").config();
const server = require("./server.js");

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
