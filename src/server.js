import server from "./app.js";

const port = 9000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
