// const app = require('./src/app.js');

const app = require('./src/app');

// const PORT= process.env.PORT || 3000;

// app.listen(PORT, ()=>{
//     console.log(`Server is running at ${PORT}`);

// })

const server = require('http').createServer();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}`));


// const server = require('http').createServer();
// const port = process.env.PORT || 3000;

// server.listen(port, () => console.log(`Listening on ${port}`));