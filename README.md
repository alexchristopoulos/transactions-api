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
