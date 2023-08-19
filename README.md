## Tech Stack

1. React
2. Express.js
3. MySQL

## Steps

1. Setup MySQL using docker

```
docker container run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=super_secret_pw -d mysql:8.0
```

2. Connect MySQL Workbench to the created container

3. Create Shemas

4. Create table with the following columns

   - id
   - name
   - description
   - cover
   - price

5. Develop backend

   - Install Express.js
   - Install nodemon for development
   - connect to the MySQL using `mysql2`
   - create api
     - add books
     - update books
     - get books
     - delete books

6. Develop frontend

   - setup an environment
