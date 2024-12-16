import { seedArticles } from "./article_seeds";
import sequelize from '../config/connection.js';

const seedAll = async (): Promise<void> => {
    try {
      await sequelize.sync({ force: true });
      console.log('\n----- DATABASE SYNCED -----\n');
  
       await seedArticles();
      console.log('\n----- ARTICLES SEEDED -----\n');
  
      process.exit(0);
    } catch (error) {
      console.error('Error seeding database:', error);
      process.exit(1);
    }
  };
  
  seedAll();