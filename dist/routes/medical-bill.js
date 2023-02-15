"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("../db");
const validation_1 = require("../utils/validation");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.status(200).json({ data: (0, db_1.getAllBills)() });
});
router.post("/", (req, res) => {
    try {
        const bill = req.body;
        (0, validation_1.billValidation)(bill);
        (0, db_1.saveBill)(bill);
        res.status(200).json({ message: "Medical bill has been added successfully!" });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.default = router;
