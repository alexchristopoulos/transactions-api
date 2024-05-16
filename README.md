docker run --name my_postgres_container \
    -e POSTGRES_USER=bank \
    -e POSTGRES_PASSWORD=bank \
    -e POSTGRES_DB=bank \
    -p 5435:5432 \
    -d postgres
