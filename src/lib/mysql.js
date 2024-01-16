import mysql from 'serverless-mysql'

export const db = mysql({
    config: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT, 10), // Parsear el puerto a entero
        database: process.env.DB_DATABASE
    }
})