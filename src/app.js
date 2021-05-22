import express from "express";
import cors from "cors";
import { appController } from "./controller/appController.js";
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.listen(port, () => {
  console.log("App is running on port:", port);
});

appController(app);
export default app;
