

**MYSQL:**
```
DROP DATABASE agile426;
CREATE DATABASE agile426;
```
AFTER STARTING MVN:
```
USE agile426;
INSERT INTO roles (name) VALUES ("ROLE_ADMIN");
INSERT INTO roles (name) VALUES ("ROLE_COACH");
INSERT INTO roles (name) VALUES ("ROLE_OWNER");
```
**Test Data**
```
INSERT INTO project (coach, date, description, name, status) VALUES ("Bob", "2022-12-23", "This is a Description", "Project M1337", "ACTIVE"); 
```

**Insomnia:**

POST: http://127.0.0.1:8080/api/auth/signup
```
{
        "name": "Bob Bobison",
        "username": "xXbob69Xx",
        "email": "b123ob@bob.ch",
        "password": "secretbob",
        "role":"ROLE_COACH"
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

GET: http://127.0.0.1:8080/api/project/
