export default () => ({
  port: Number(process.env.PORT) || 8000,
  mongo: {
    uri: process.env.MONGO_URI,
    dbName: process.env.MONGO_DB_NAME,
  },
});
