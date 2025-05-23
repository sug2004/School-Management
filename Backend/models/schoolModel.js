import mysql from 'mysql2'
import donenv from 'dotenv'
donenv.config()

const pool = mysql.createPool({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE

}).promise()

export async function listSchools() {
    const [row] = await pool.query("Select * from schools")
    return row   
}

export async function getSchool(id) {
    const [row] = await pool.query(`
    SELECT *
    FROM schools
    WHERE id = ?
    `, [id])
    return row
}

export async function addSchools(name, address, latitude, longitude) {
    const [result] = await pool.query(`
    INSERT INTO schools (name, address, latitude, longitude) 
    VALUES (?, ?, ?, ?)
    `, [name, address, latitude, longitude])
    const id  = result.insertId
    return getSchool(id);    
}
