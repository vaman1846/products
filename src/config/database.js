const {Pool} = require('pg');

const dotenv = require('dotenv');
const { text } = require('express');
const { param } = require('express');

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

pool.once('connect',()=>{
    console.log('connected');
});

pool.on('error',(error)=>{
    console.log("error in");
})

// const results = await pool.query(text, param),s


module.exports={
  
    // pool.query(text,param),
     query:(text, params) =>pool.query(text, params),
};
