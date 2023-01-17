module.exports = {
  HOST: "localhost",
  username: "postgres",
  password: "Rampoo@1981",
  database: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};