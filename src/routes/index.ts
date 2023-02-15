import items from "./medical-bill";
import { Express } from "express";

const constructorMethod = (app: Express) => {
  app.use("/items", items);
  app.use("*", (req, res) => {
    res.status(404).json({ Error: "URL not found", Data: null });
  });
};

export default constructorMethod;
