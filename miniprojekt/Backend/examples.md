# How to use the API

## Logging in

### /login
- Request Type: POST
- Required fields in body:
    - email
    - password
- Returns:
    - token

#### Example
##### Request:
``` javascript
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
    "email": "admin"
    "password": "",
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("localhost:3000/login", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
```
##### Result:
``` json
{
    "token": "ce301dfd-1bbb-4a30-9f14-67076dedf499"
}
```

### /logout
- Request Type: POST

#### Example
##### Request:
``` javascript
const myHeaders = new Headers();
myHeaders.append("Authorization", "ce301dfd-1bbb-4a30-9f14-67076dedf499");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  redirect: "follow"
};

fetch("localhost:3000/logout", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```
##### Result:
``` 
    Successfully logged out!
```

### /currentUser
- Request Type: GET
- Returns:
    - user

#### Example
##### Request:
``` javascript
const myHeaders = new Headers();
myHeaders.append("Authorization", "ce301dfd-1bbb-4a30-9f14-67076dedf499");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("localhost:3000/currentuser", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```
##### Result:
``` json
{
    {
    "user": {
        "user_ID": -1,
        "email": "admin",
        "name": "admin",
        "password": "",
        "admin": true,
        "createdAt": "2024-09-27T22:42:50.000Z",
        "updatedAt": "2024-09-27T22:42:50.000Z"
    }
}
}
```


## User API

### /createUser
- Requires admin
- Request Type: PUT
- Required fields in body:
    - email
    - password
    - name
    - isAdmin (optional, defaults to false)

#### Example
##### Request:
``` javascript
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "d46beb71-4658-42e6-a338-2ab87362f609");

const raw = JSON.stringify({
  "password": "password",
  "email": "email",
  "name": "name",
  "isAdmin": true
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("localhost:3000/createUser", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

### /updateUser
- Users can update only their account, admins can update everything
- Request Type: POST
- Required fields in body:
    - userID
    - email
    - password
    - name
    - isAdmin (optional, defaults to false, requires admin rights to set to true)
#### Example
##### Request:
``` javascript
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "d46beb71-4658-42e6-a338-2ab87362f609");

const raw = JSON.stringify({
  "userID": 1,
  "email": "new email",
  "password": "new password",
  "name": "new name",
  "admin": true
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("localhost:3000/updateUser", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

### /deleteUser
- Requires admin
- Request Type: Delete
- Required fields in body:
    - userID
#### Example
##### Request:
``` javascript
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Authorization", "Bearer 9876ba39-4685-4e65-ba7b-93cdcc0233a6");

const raw = JSON.stringify({
  "userID": 1
});

const requestOptions = {
  method: "DELETE",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("localhost:3000/deleteUser", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

### /getAllUsers
- Requires admin
- Request Type: Get
- Returns:
    - User array
#### Example
##### Request:
``` javascript
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 9876ba39-4685-4e65-ba7b-93cdcc0233a6");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("localhost:3000/getallusers", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```
##### Result:
``` json
{
    "users": [
        {
            "user_ID": -1,
            "email": "admin",
            "name": "admin",
            "password": "",
            "admin": true,
            "createdAt": "2024-09-27T22:42:50.000Z",
            "updatedAt": "2024-09-27T22:42:50.000Z"
        }
    ]
}

```

## Task API

### /createTask
- Requires admin
- Request Type: PUT
- Required fields in body:
    - name
    - description (optional)
    - deadline
    - assigned_user_ID (can be null)

### /updateTask
- Requires admin
- Request Type: POST
- Required fields in body:
    - taskID
    - name (optional)
    - description (optional)
    - deadline (optional)
    - assigned_user_ID (can be null)


### /deleteTask
- Requires admin
- Request Type: DELETE
- Required fields in body:
    - taskID


### /getAllTasks
- Requires admin
- Request Type: Get
- Returns:
    - Task Array


### /getUserTasks
- Users can view own tasks, admins can view all
- Request Type: Get
- Required fields in body:
    - userID
- Returns:
    - Task Array


### /getTaskByID
- Requires admin
- Request Type: Get
- Required fields in body:
    - taskID
- Returns:
    - Task


### /completeTask
- Requires admin or user that is assigned to the task
- Request Type: Get
- Required fields in body:
    - taskID

## Warning

- Most of the API functions need a token that can be obtained when logging in.
- The token has to be placed in the `Authorization` header of the requests.
- The tokens are only stored in the memory.