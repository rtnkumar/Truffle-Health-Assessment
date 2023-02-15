"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medical_bill_1 = __importDefault(require("./medical-bill"));
const constructorMethod = (app) => {
    app.use("/items", medical_bill_1.default);
    app.use("*", (req, res) => {
        res.status(404).json({ Error: "URL not found", Data: null });
    });
};
exports.default = constructorMethod;
