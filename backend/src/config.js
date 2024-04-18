module.exports = {
  development: {
    database: {
      host: 'localhost',
      port: 3306, // Change this to your PostgreSQL port if different
      name: 'ecommerce_platform', // Change this to your development database name
      username: 'root', // Change this to your development database username
      password: '', // Change this to your development database password
      dialect: 'mysql' // Change this to 'mysql' or 'sqlite' if using a different database
    },
    jwtSecret: 'kEUHA229H2NKiKJd92kckj2ks' // Change this to a randomly generated secret key for development
  },
  production: {
    database: {
      host: 'localhost',
      port: 5432, // Change this to your production PostgreSQL port if different
      name: 'ecommerce_prod', // Change this to your production database name
      username: 'your_prod_username', // Change this to your production database username
      password: 'your_prod_password', // Change this to your production database password
      dialect: 'postgres' // Change this to 'mysql' or 'sqlite' if using a different database
    },
    jwtSecret: 'your_prod_jwt_secret' // Change this to a randomly generated secret key for production
  }
};


