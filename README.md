# Instructions on how to run

1. `pnpm install`
2. Bring up a postgres database

```
docker run --name bank \
    -e POSTGRES_USER=bank \
    -e POSTGRES_PASSWORD=bank \
    -e POSTGRES_DB=bank \
    -p 5435:5432 \
    -d postgres
```

3. `pnpm dev` for development
4. or `pnpm build` and then `pnpm start` for production

# Postman collection

under root folder of this repo you can find the file `bank-app.postman_collection.json` which contains the requests of the API to execute via Postman

# Project structure

- index.ts creates an http server using app.ts module
- app.ts contains application file which defines the order of middleware and routes execution
- config.ts contains configuration of the app
- routes: contains API express routes definitions
- controllers: contains request handler functions. Those functions usually read, process the requests then call the service layer and send at last the http response
- services: contain service layer that is mainly the buisness logic layer
- middleware: HTTP request middleware functions that are executed for each request
- db: contains DB entities (currently account and transaction)
- utils: contains common utility functions that are used among various modules such as custom errors and `RequestWithBody` type for use in controlles to define request body type

# API Endpoints

## GET /transaction

### Response example (list of transactions)

```
[
    {
        "id": "6276a494-1447-4b94-b1cd-4705a5b9c44d",
        "sourceAccount": "9e0359e4-69b8-4ce4-8705-c64628b5d039",
        "targetAccount": "0d6223e2-b29d-4e83-94af-063ed1d57b49",
        "amount": "250",
        "date": "2024-05-19T07:01:26.078Z"
    },
]
```

## GET /account

### Response example (list of accounts and sum of money)

```
{
  {
    "totalMoney": 5350,
    "accounts": [
        {
            "id": "57921f29-c395-4cc0-aeb4-8bb7faf72aa6",
            "balance": "500"
        },
        {
            "id": "4037e890-337c-47a8-b265-4e488b668f50",
            "balance": "1500"
        },
        {
            "id": "c9f9e3e1-72cb-4038-9970-3ed4f1d72cb0",
            "balance": "2350"
        },
        {
            "id": "9e0359e4-69b8-4ce4-8705-c64628b5d039",
            "balance": "113"
        },
        {
            "id": "0d6223e2-b29d-4e83-94af-063ed1d57b49",
            "balance": "887"
        }
    ]
  }
}
```

## POST /transaction (transfer money between accounts)

### Request body example

```
{
    "targetAccountId": "0d6223e2-b29d-4e83-94af-063ed1d57b49",
    "sourceAccountId": "c9f9e3e1-72cb-4038-9970-3ed4f1d72cb0",
    "amount": 15
}
```

### Response example

```
{
    "msg": "Transferred 25 from c9f9e3e1-72cb-4038-9970-3ed4f1d72cb0 to 0d6223e2-b29d-4e83-94af-063ed1d57b49 successfully"
}

```

## GET /account/{{account_id_here}} (get account details)

### Response example

```
{
    "id": "9e0359e4-69b8-4ce4-8705-c64628b5d039",
    "balance": "500"
}
```

## POST /account (create account with an initial balance)

### Request body example

```
{
    "balance": 2350
}
```

### Response example

```
{
    "msg": "Created account with id c9f9e3e1-72cb-4038-9970-3ed4f1d72cb0 and initial balance 2350"
}
```
