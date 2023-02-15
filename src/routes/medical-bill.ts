import express from "express";
import { getAllBills, saveBill } from "../db";
import { medicalBill } from "utils/medical-bill";
import { billValidation } from "../utils/validation";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ data: getAllBills() });
});

router.post("/", (req, res) => {
  try {
    const bill: medicalBill = req.body;
    billValidation(bill);
    saveBill(bill);
    res.status(200).json({ message: "Medical bill has been added successfully!" });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
