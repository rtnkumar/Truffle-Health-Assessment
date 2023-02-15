import supertest from "supertest";
import { app } from '../index'


const firstMedicalBill = [{
    "patient_name": "Roushan",
    "hospital_name": "Mount Sinai Hospital",
    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
    "date_of_service": "2023-01-01T23:28:56.782Z",
    "bill_amount": 1200
}]


const twoMedicalBill = [{
    "patient_name": "Roushan",
    "hospital_name": "Mount Sinai Hospital",
    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
    "date_of_service": "2023-01-01T23:28:56.782Z",
    "bill_amount": 1200
}, {
    "patient_name": "Jhon",
    "hospital_name": "Mount Sinai Hospital",
    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
    "date_of_service": "2023-02-01T23:28:56.782Z",
    "bill_amount": 1000
}
]

const threeMedicalBill = [{
    "patient_name": "Roushan",
    "hospital_name": "Mount Sinai Hospital",
    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
    "date_of_service": "2023-01-01T23:28:56.782Z",
    "bill_amount": 1200
}, {
    "patient_name": "Jhon",
    "hospital_name": "Mount Sinai Hospital",
    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
    "date_of_service": "2023-02-01T23:28:56.782Z",
    "bill_amount": 1000
},
{
    "patient_name": "Shan Joe",
    "hospital_name": "Mount Sinai Hospital",
    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
    "date_of_service": "2023-02-01T23:22:16.782Z",
    "bill_amount": 1500
}
]



describe("Medical Bill", () => {
    describe("Get medical bill", () => {
        describe("When there is no any bill", () => {
            it("should return a 200 and empty bill list", async () => {
                const { body, statusCode } = await supertest(app).get('/items');
                expect(statusCode).toBe(200);
                expect(body.data).toEqual([]);
            });
        });
    });

    describe("Add medical bill", () => {
        describe('having no five properties', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "s_no": 1,
                    "patient_name": "Roushan",
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "2023-01-01T23:28:56.782Z",
                    "bill_amount": 1200

                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("Only five properties are required!");
            });
        });
    });

    // Request body with mission propertie patient_name
    describe("Add medical bill", () => {
        describe('request body with missing propertie patient_name ', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "2023-01-01T23:28:56.782Z",
                    "bill_amount": 1200
                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("patient_name is requied in request body!");
            });
        });
    });


    // request body with missing propertie hospital_name
    describe("Add medical bill", () => {
        describe('request body with missing propertie hospital_name ', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Roushan",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "2023-01-01T23:28:56.782Z",
                    "bill_amount": 1200
                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("hospital_name is requied in request body!");
            });
        });
    });

    // request body with missing propertie address
    describe("Add medical bill", () => {
        describe('request body with missing propertie address ', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Roushan",
                    "hospital_name": "Mount Sinai Hospital",
                    "date_of_service": "2023-01-01T23:28:56.782Z",
                    "bill_amount": 1200
                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("address is requied in request body!");
            });
        });
    });

    // request body with missing propertie date_of_service
    describe("Add medical bill", () => {
        describe('request body with missing propertie date_of_service', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Roushan",
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "bill_amount": 1200
                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("date_of_service is requied in request body!");
            });
        });
    });

    // request body with missing propertie bill_amount
    describe("Add medical bill", () => {
        describe('request body with missing propertie bill_amount ', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Roushan",
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "2023-01-01T23:28:56.782Z"
                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("bill_amount is requied in request body!");
            });
        });
    });

    // request body with empty value of patient_name
    describe("Add medical bill", () => {
        describe('request body with empty value of patient_name ', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "",
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "2023-01-01T23:28:56.782Z",
                    "bill_amount": 1200
                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("patient_name is required!");
            });
        });
    });

    // request body with empty value of hospital_name
    describe("Add medical bill", () => {
        describe('request body with empty value of hospital_name ', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Roushan",
                    "hospital_name": "",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "2023-01-01T23:28:56.782Z",
                    "bill_amount": 1200
                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("hospital_name is required!");
            });
        });
    });


    // request body with empty value of address
    describe("Add medical bill", () => {
        describe('request body with empty value of address ', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Roushan",
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "",
                    "date_of_service": "2023-01-01T23:28:56.782Z",
                    "bill_amount": 1200
                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("address is required!");
            });
        });
    });

    // request body with empty value of date_of_service
    describe("Add medical bill", () => {
        describe('request body with empty value of date_of_service ', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Roushan",
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "",
                    "bill_amount": 1200
                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("date_of_service is required!");
            });
        });
    });

    // request body with empty value of bill_amount
    describe("Add medical bill", () => {
        describe('request body with empty value of bill_amount ', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Roushan",
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "2023-01-01T23:28:56.782Z",
                    "bill_amount": null
                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("bill_amount is required!");
            });
        });
    });

    // Adding first bill
    describe("Add medical bill", () => {
        describe('valid request body ', () => {
            it("should return a 200 and added bill successfully ", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Roushan",
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "2023-01-01T23:28:56.782Z",
                    "bill_amount": 1200
                });
                expect(statusCode).toBe(200);
                expect(body.message).toEqual("Medical bill has been added successfully!");
            });
        });
    });

    // Getting medical bill after adding fist bill
    describe("Get medical bill", () => {
        describe("After adding first bill", () => {
            it("should return a 200 and bill list", async () => {
                const { body, statusCode } = await supertest(app).get('/items');
                expect(statusCode).toBe(200);
                expect(body.data).toEqual(firstMedicalBill);
            });
        });
    });

    // Adding 2nd bill
    describe("Add medical bill", () => {
        describe('valid request body ', () => {
            it("should return a 200 and added bill successfully ", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Jhon",
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "2023-02-01T23:28:56.782Z",
                    "bill_amount": 1000
                });
                expect(statusCode).toBe(200);
                expect(body.message).toEqual("Medical bill has been added successfully!");
            });
        });
    });

    // Getting all medical bill after adding 2nd bill
    describe("Get medical bill", () => {
        describe("After adding 2nd bill", () => {
            it("should return a 200 and all bill", async () => {
                const { body, statusCode } = await supertest(app).get('/items');
                expect(statusCode).toBe(200);
                expect(body.data).toEqual(twoMedicalBill);
            });
        });
    });

    // Duplicate bill
    describe("Add medical bill", () => {
        describe('duplicate [ adding same bill again ]', () => {
            it("should return a 400 and error message", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Roushan",
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "2023-01-01T23:28:56.782Z",
                    "bill_amount": 1200
                });
                expect(statusCode).toBe(400);
                expect(body.error).toEqual("This bill is already exists!");
            });
        });
    });



    // Adding 3rd bill
    describe("Add medical bill", () => {
        describe('valid request body ', () => {
            it("should return a 200 and added bill successfully ", async () => {
                const { body, statusCode } = await supertest(app).post('/items').send({
                    "patient_name": "Shan Joe",
                    "hospital_name": "Mount Sinai Hospital",
                    "address": "One Gustave L Levy Place, New York, NY 10029-0310",
                    "date_of_service": "2023-02-01T23:22:16.782Z",
                    "bill_amount": 1500
                });
                expect(statusCode).toBe(200);
                expect(body.message).toEqual("Medical bill has been added successfully!");
            });
        });
    });

    // Getting all medical bill after adding 3rd bill
    describe("Get medical bill", () => {
        describe("After adding 3rd bill", () => {
            it("should return a 200 and all bills", async () => {
                const { body, statusCode } = await supertest(app).get('/items');
                expect(statusCode).toBe(200);
                expect(body.data).toEqual(threeMedicalBill);
            });
        });
    });

});
