use postgres
    docker container run -d --name=docker -p 5432:5432 -e POSTGRES_USER=docker -e POSTGRES_PASSWORD=docker postgres
