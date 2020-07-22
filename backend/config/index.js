require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS || '*',
    dbHost: process.env.DB_HOST || '178.128.146.252',
    dbName: process.env.DB_NAME || 'admin_sigmatest',
    dbUser: process.env.DB_USER || 'admin_sigmauser',
    dbPassword: process.env.DB_PASSWORD || 'pfaDKIJyPF',
}

module.exports = { config }