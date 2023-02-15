"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBills = exports.saveBill = void 0;
const validation_1 = require("../utils/validation");
const items = [];
const saveBill = (bill) => {
    (0, validation_1.billValidation)(bill);
    bill.date_of_service = new Date(bill.date_of_service);
    for (var item of items) {
        if (bill.patient_name == item.patient_name && bill.hospital_name == item.hospital_name && bill.date_of_service.getTime() == item.date_of_service.getTime() && bill.bill_amount == item.bill_amount) {
            throw new Error("This bill is already exists!");
        }
    }
    items.push(bill);
};
exports.saveBill = saveBill;
const getAllBills = () => {
    return items;
};
exports.getAllBills = getAllBills;
