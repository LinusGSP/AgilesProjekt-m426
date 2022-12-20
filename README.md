# Agile246
A School Project in Module 426 (Developing softawre with agile methods). Our Project is a web application made with ReactJS and MVN Springboot. 


**MYSQL:**
```
DROP DATABASE agile426;
CREATE DATABASE agile426;
```
AFTER STARTING MVN:
```
USE agile426;
INSERT INTO roles (name) VALUES ("ROLE_ADMIN");
```

**Insomnia:**

POST: http://127.0.0.1:8080/api/auth/signup
```
{
        "name": "Bob Bobison",
        "username": "xXbob69Xx",
        "email": "b123ob@bob.ch",
        "password": "secretbob"
}
```


POST: http://127.0.0.1:8080/api/auth/signin
```
{
        "usernameOrEmail": "xXbob69Xx",
        "password": "secretbob"
}
```

http://127.0.0.1:8080/api/auth/logout
```
        No Body
```

POST: http://127.0.0.1:8080/api/project/
```
{
        "date":"2022-01-01",
        "description":"Test Description",
        "status":"ACTIVE"
}
```
