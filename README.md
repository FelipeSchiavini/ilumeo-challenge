# Ilumeo code Challenge

![Ilumeo application](screenshot.png)


## Run it on develop environment

### Database

1. copy the "sample.env" and change it's name to .env
2. run `docker compose up`
3. to visualize the database you can go to `http://localhost:8080/console/`
4. insert `HASURA_GRAPHQL_ADMIN_SECRET` at .env as password 

#### update migrations (only if you want to update database metadata)

1. go to folder hasura "cd hasura"
2. copy the "sample.env" and change it's name to .env

### FRONT

1. go to folder front `cd web`
2. copy the "sample.env" and change it's name to .env
3. run `npm install`
4. run `npm run dev`

### API

1. go to folder server `cd server`
2. copy the "sample.env" and change it's name to .env
3. run `npm install`
4. run `npm run start`
5. go to browser on url `http://localhost:5173/`

#### RUN AUTOMATED TESTS ON API
1. go to folder server `cd server`
2. copy the "sample.env" and change it's name to .env
3. run `npm run dev`

#### CREATE USER FOR TEST

1. You can run `npm run seed` it will create some use on database and return random id. Use it to login

2. You can create a new user running this command on terminal it will return id to login (change <USER_NAME> for your name);

```
  curl --location 'http://localhost:3000/user/create' \
  --header 'Content-Type: application/json' \
  --data '{
      "name": <USER_NAME>
  }'
```


