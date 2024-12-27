# API Documentation

## User Registration
**Endpoint:** `/user/register`  
**Method:** POST  
**Description:** Register a new user in the system

### Request Body
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string"
}
```

### Validation Rules
- `fullname.firstname`: Minimum 2 characters required
- `email`: Must be a valid email format
- `password`: Minimum 6 characters required

### Response

#### Success Response
**Code:** 201 Created
```json
{
    "token": "JWT_TOKEN",
    "user": {
        "fullname": {
            "firstname": "string",
            "lastname": "string"
        },
        "email": "string",
        "_id": "string"
    }
}
```

#### Error Response
**Code:** 400 Bad Request
```json
{
    "errors": [
        {
            "msg": "Error message",
            "param": "field_name",
            "location": "body"
        }
    ]
}
```

### Example
```bash
curl -X POST http://localhost:3000/user/register \
-H "Content-Type: application/json" \
-d '{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "password123"
}'
```

### Example Responses

#### Success Response Example
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "email": "john@example.com",
        "_id": "507f1f77bcf86cd799439011"
    }
}
```

#### Error Response Examples

Invalid Email:
```json
{
    "errors": [
        {
            "msg": "Email is not valid",
            "param": "email",
            "location": "body"
        }
    ]
}
```

Short Password:
```json
{
    "errors": [
        {
            "msg": "Password must be at least 6 characters long",
            "param": "password",
            "location": "body"
        }
    ]
}
```

Short First Name:
```json
{
    "errors": [
        {
            "msg": "First name must be at least 2 characters long",
            "param": "fullname.firstname",
            "location": "body"
        }
    ]
}
```
