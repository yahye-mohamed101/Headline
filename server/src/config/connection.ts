import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

let sequelize: Sequelize;

try {
  if (process.env.DATABASE_URL) {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      },
      logging: false
    });
  } else {
    sequelize = new Sequelize('sqlite::memory:', {
      logging: false
    });
  }
} catch (error) {
  console.error('Failed to initialize database:', error);
  // Fallback to in-memory SQLite database
  sequelize = new Sequelize('sqlite::memory:', {
    logging: false
  });
}

export default sequelize;