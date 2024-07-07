# Week-6_Assignment_Celebal-Summer-Internship-

## RESTful API with Node.js and Express

In this project, I create a RESTful API using Node.js and Express that supports basic CRUD operations on a resource (like users)

## Features

- **Create User**: Add a new user to the database.
- **Read Users**: Retrieve all users or a specific user by ID.
- **Update User**: Modify details of an existing user.
- **Delete User**: Remove a user from the database.

## Technologies Used

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **dotenv** (for environment variables)

## Installation

To run this application locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Anupam-03/Week-6_Assignment_Celebal-Summer-Internship-.git
   cd Week-6_Assignment_Celebal-Summer-Internship
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     DATABASE_URI=<your_mongodb_connection_string>
     ```

4. **Start the application:**
   ```bash
   npm start
   ```

5. **Open your web browser or API client and visit:**
   ```
   http://localhost:5000
   ```

## API Endpoints

### User Endpoints

- **Create a new user**
  - **POST** `/users`
  - Request body:
    ```json
    {
      "name": "John De",
      "address": "jodhpur",
      "cartItems": 123,
      "shopping": true
    }
    ```
    <br>
    
    ![image](https://github.com/Anupam-03/Week-6_Assignment_Celebal-Summer-Internship-/assets/116145439/c62b6b6b-91cc-416d-a64e-a376904b2835)

---

- **Get all users**
  - **GET** `/users`
    <br>
  ![image](https://github.com/Anupam-03/Week-6_Assignment_Celebal-Summer-Internship-/assets/116145439/caaeed12-c6f3-416c-bd57-4d64d467d0f7)

---

- **Update a user by ID**
  - **PATCH** `/users/:id`
  - Request body (example):
    ```json
    {
      "name": "Jane Doe"
    }
    ```
    ![image](https://github.com/Anupam-03/Week-6_Assignment_Celebal-Summer-Internship-/assets/116145439/af5bd172-696a-4f8b-87ef-8d07b3bda52c)

---

- **Delete a user by ID**
  - **DELETE** `/users/:id`
  <br>
  
  ![image](https://github.com/Anupam-03/Week-6_Assignment_Celebal-Summer-Internship-/assets/116145439/566bbb74-8922-4b85-a2eb-99db39f982b3)

---


## Error Handling

The API includes basic error handling for common issues such as resource not found and validation errors. Responses include appropriate HTTP status codes and error messages.
