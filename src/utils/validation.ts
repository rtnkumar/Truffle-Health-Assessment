import { medicalBill } from "utils/medical-bill";

const billValidation = (bill: medicalBill) => {
  if (!bill || bill === null) throw new Error("No data received");
  const keysArr:string[]=Object.keys(bill);
  const keyLen:number=keysArr.length;
  const keys:string[]=["patient_name","hospital_name","address","date_of_service","bill_amount"];
  

  for (var key of keys) {
     if(!keysArr.includes(key)){
      throw new Error(key+" is requied in request body!");
     }
  }
  
  if(keyLen!=5){
    throw new Error("Only five properties are required!");
  } 

  bill.patient_name=bill.patient_name.trim();
  bill.hospital_name=bill.hospital_name.trim();
  bill.address=bill.address.trim();
  if(!bill.patient_name){
    throw new Error("patient_name is required!");

  }
  if(!bill.hospital_name){
    throw new Error("hospital_name is required!");
  }
  if(!bill.address){
    throw new Error("address is required!");
  }

  if(!bill.date_of_service){
    throw new Error("date_of_service is required!");
  }
  if(!bill.bill_amount){
    throw new Error("bill_amount is required!");
  }

};

export { billValidation };
