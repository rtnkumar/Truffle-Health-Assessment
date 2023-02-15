type medicalBill = {
  patient_name: string;
  hospital_name:string;
  address: string;
  date_of_service: Date;
  bill_amount: number;
};

type medicalBillList = medicalBill[];

export { medicalBill, medicalBillList };
