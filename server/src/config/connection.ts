import dotenv from 'dotenv';
dotenv.config();

console.log('dotenv loaded:', process.env.DB_USER);

console.log('DB_USER:', process.env.DB_USER);  
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);  
console.log('DB_NAME:', process.env.DB_NAME);  

import { Sequelize } from 'sequelize';

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD || '',
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

export default sequelize;