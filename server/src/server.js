import http from "http";
import app from "./app.js";

const PORT = process.env.PORT || 8000;
console.log(process.env.NAME);
// app.listen();
const server = http.createServer(app);

server.listen(PORT, () => console.log(`${PORT} is active`));
