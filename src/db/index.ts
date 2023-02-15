import { medicalBillList, medicalBill } from "utils/medical-bill";
import { billValidation } from "../utils/validation";
const items: medicalBillList = [];

const saveBill = (bill: medicalBill) => {
  billValidation(bill);
  bill.date_of_service = new Date(bill.date_of_service);
  for(var item of items){
    if(bill.patient_name==item.patient_name && bill.hospital_name==item.hospital_name && bill.date_of_service.getTime()==item.date_of_service.getTime() && bill.bill_amount==item.bill_amount){
      throw new Error("This bill is already exists!");
    }
  }
  items.push(bill);
};

const getAllBills = () => {
  return items;
};

export { saveBill, getAllBills };
