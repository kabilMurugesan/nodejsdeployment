// const express = require('express');
// const app = express();
// const mysql = require("mysql2")
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
// app.listen(4000, function () {
//     console.log('Example app listening on port 3000!');
// });

// const connection = mysql.createConnection({
//     host: 'sampledeploy.canqapxg01w6.ap-south-1.rds.amazonaws.com',
//     user: 'admin',
//     password: 'e1kgtJ1RzynWTIc9xplZ',
//     database: 'mysql'
// });

// connection.connect(function (err) {
//     if (err) {
//         console.error('Error connecting to database: ' + err.stack);
//         return;
//     }
//     console.log('Connected to database as id ' + connection.threadId);
// });

// app.get('/', async (req, res) => {
//     try {
//         const connection = await connectToDatabase();

//         // Example SQL query
//         const [rows, fields] = await connection.execute('SELECT * FROM Persons');

//         // Release the connection back to the pool
//         connection.release();

//         // Send the query results as JSON response
//         res.json(rows);
//     } catch (error) {
//         console.error('Error executing query: ' + error);
//         res.status(500).send('Error fetching data from database');
//     }
// });

const express = require('express');
const app = express();
const mysql = require('mysql2/promise'); // Use mysql2/promise for async/await
const cors = require('cors');

// Allow requests from any origin (replace * with your frontend URL for production)
app.use(cors());

// Create a connection pool (recommended for production)
// const pool = mysql.createPool({
//     host: 'proddbtesting.canqapxg01w6.ap-south-1.rds.amazonaws.com',
//     user: 'admin',
//     password: '4FVZOm2J9rbbkOsFk16h',
//     database: 'testDB',
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// });

// // Define a route to handle GET requests to the root URL
// app.get('/', async (req, res) => {
//     try {
//         // Acquire a connection from the pool
//         const connection = await pool.getConnection();

//         // Example SQL query to select all records from 'Persons' table
//         const [rows, fields] = await connection.execute('SELECT * FROM Persons');

//         // Release the connection back to the pool
//         connection.release();

//         // Send the query results as JSON response
//         res.json(rows);
//     } catch (error) {
//         console.error('Error executing query: ' + error);
//         res.status(200).send("working fine");
//     }
// });

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// Start the Express.js server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
