# react-todo
Simple todo app built using react, express and node.

## Current state
Currently, the NodeJS aspect of the application is completed.
Node connects to a docker container.
Express API is set to listen to port 3001, as 3000 was already in use for something else on my machine.

## Docker Container
### Creating the docker container
- install docker 
  Instructions can be found online easily
- Install the postgreSQL container:
```
sudo docker run --name name-postgres1 -P -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -e POSTGRES_DB=tododb -d postgres:latest
```
#### Getting the port of the container
- Then obtain the exposed port to connect to the database, this can be found using 
```
sudo docker ps
```
- Find the container named "name-postgres1", and get the post being exposed.
### Create the database table inside of the container
```
CREATE TABLE todotable (task_id serial PRIMARY KEY, task_desc varchar (100) NOT NULL);
```
- If you want to manually insert a row to the table, use:
```
INSERT INTO todotable (task_desc) VALUES ('Establish connection to dockerDB');
```
### Connecting NodeJS to the app
- inside of './express-backend/src/dbConnect.js', change the port number on line 12 to reflect the port number of your container.
