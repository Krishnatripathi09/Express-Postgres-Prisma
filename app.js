import "dotenv/config";
import express from "express";
import RouteUser from "./routes/index.js";
const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(RouteUser);

app.get("/user", (req, res) => {
  res.status(200).send("I am user Route");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
