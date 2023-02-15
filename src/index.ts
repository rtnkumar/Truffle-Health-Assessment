import express from "express";
import routes from "./routes";

export const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started successfully");
});
