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

app.get('/', function (req, res) {
    res.send('Hello World!');
});


app.get('/app', function (req, res) {
    res.send('application World!');
});
// Start the Express.js server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
