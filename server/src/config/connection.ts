import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

// Use DATABASE_URL if provided (e.g., on Render), otherwise use individual credentials
const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false // Important for connecting to Render's PostgreSQL
        }
      }
    })
  : new Sequelize(
      process.env.DB_NAME || 'headline_db',
      process.env.DB_USER || 'postgres',
      process.env.DB_PASSWORD || '',
      {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',
        port: parseInt(process.env.DB_PORT || '5432'),
        logging: false
      }
    );

export default sequelize;