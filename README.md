
---

# 🎓 School Management API

A **Node.js RESTful API** for managing school locations and retrieving nearby schools based on geolocation coordinates. Built with Express.js and MySQL, this API is ideal for applications requiring spatial queries and distance-based sorting.

---

## ✨ Features

* 🚀 Add new schools with location data
* 📍 Retrieve schools sorted by proximity to a user's coordinates
* 🛢️ MySQL database integration
* 📐 Accurate geolocation-based distance calculations using the Haversine formula

---

## 📦 API Endpoints

### `GET /api/listSchools?latitude={lat}&longitude={lon}`

Returns a list of schools sorted by distance from the provided coordinates.

**Query Parameters:**

* `latitude` (required): Latitude of the user's location
* `longitude` (required): Longitude of the user's location

**Example Response:**

```json
[
  {
    "name": "Green Valley High School",
    "address": "123 Elm Street, Springfield",
    "latitude": 25.2233,
    "longitude": -67.3478,
    "distance_km": 2.4
  },
  ...
]
```

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/school-management.git
cd school-management
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and populate it:

```env
PORT=8080
MYSQL_HOST=localhost
MYSQL_USER=root
MYSQL_PASSWORD=your_password
MYSQL_DATABASE=schoolmanagement
```

### 4. Initialize the Database

Run the following command to set up the MySQL database schema:

```bash
mysql -u root -p < schema.sql
```

### 5. Start the Server

#### Development:

```bash
npm run dev
```

#### Production:

```bash
npm start
```

---

## 📁 Project Structure

```
Backend/
├── config/               # Database configuration
│   └── database.js
├── controllers/          # Request handlers
│   └── schoolController.js
├── models/               # Database queries and logic
│   └── schoolModel.js
├── routes/               # API routes
│   └── schoolRoutes.js
├── utils/                # Utility functions
│   └── geoUtils.js       # Haversine distance calculator
├── app.js                # Entry point
└── .env                  # Environment configuration
```

---

## 🧰 Tech Stack

* **Node.js** / **Express.js**
* **MySQL**
* **CORS** for cross-origin resource sharing
* **dotenv** for environment variable management

---

## 🚀 Deploy

Easily deploy this API to Render with:

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)]([https://render.com/deploy](https://school-management-y9wn.onrender.com))

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Contributions

Feel free to fork this repo, make enhancements, and open a pull request!

---

