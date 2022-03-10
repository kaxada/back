module.exports = {
    HOST: "localhost",
    USER: "newbie",
    PASSWORD: "kaxada",
    DB: "bootcamp_db",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }}