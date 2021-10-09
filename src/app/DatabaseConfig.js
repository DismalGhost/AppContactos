const mssql = require('mssql');

const Config = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: DB_SERVER,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 30000
    },
    options: {
      encrypt: true, // for azure
      trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}

const getPool = async ()=>{

    return await mssql.connect(Config);

}

module.exports = { getPool, sqlType: mssql }