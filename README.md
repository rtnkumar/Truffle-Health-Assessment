# Truffle-Health-Assessment
Backend Development Internship

# Installation
npm install : it does install the packages taking package.json as a reference.<br>
npm run test : it's used to run api test case.<br>
npm run dev : it's used to run the application on dev environment.<br>
npm run prod : it's used to run the application on prod environment


## How to set up our application
1. First, take clone of project or download the project and go/navigate to project folder [Truffle-Health-Assessment] <br>
2. Run 'npm install' to install the required dependencies for the project.<br>
3. Run 'npm run test' to run api test case.<br>
4. Run 'npm run dev' to run the application

## How to import postman collection for API testing
There is postman collection [TruffleHealth.postman_collection.json] in project [Truffle-Health-Assessment] so
Go to Home/File of postman and click import this file [TruffleHealth.postman_collection.json] in postman.

## End point of API
1. GET /items: returns a list of medical bills
- http://localhost:3000/items
- curl request:- curl --location --request GET 'http://localhost:3000/items'
2. POST /items: creates a new medical bill
- http://localhost:3000/items
- curl request:- curl --location --request POST 'http://localhost:3000/items' \
--header 'Content-Type: application/json' \
--data-raw '{
    "patient_name":"Mohan",
    "hospital_name":"Mount Sinai Hospital",
    "address":"One Gustave L Levy Place, New York, NY 10029-0310",
    "date_of_service": "2014-01-01T23:28:56.782Z",
    "bill_amount":120
}'


## GitHub Link
- https://github.com/rtnkumar/Truffle-Health-Assessment

