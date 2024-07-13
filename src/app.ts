import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use("/api", router);
app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

export { app };