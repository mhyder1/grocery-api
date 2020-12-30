module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DB_URL: process.env.DB_URL || "postgresql://dunder-mifflin@localhost/grocery",
  API_TOKEN: process.env.API_TOKEN || '5271f4f2-40cb-41be-adea-f38ae8395cc2',
  JWT_SECRET: process.env.JWT_SECRET || 'grocery-list-api-jwt'
  
}