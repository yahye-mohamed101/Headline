# HeadLine - News Aggregator
HeadLine is a modern news aggregator web application built with React, TypeScript, and Node.js. It provides users with the latest news articles from various sources, featuring category filtering, search functionality, and trending news sections.

Render Link: [(https://headline-anop.onrender.com/)]

## Features
- **Real-time News Updates:** Access the latest news articles from various reliable sources.
- **Category Filtering:** Filter news by categories including:
  - Technology
  - Business
  - Sports
  - Entertainment
  - Science
  - Health
- **Search Functionality:** Search through articles by title, description, or author.
- **Trending News:** View the top 10 trending articles.
- **Responsive Design:** Fully responsive layout that works on desktop, tablet, and mobile devices.
- **Dark Mode Support:** Built-in dark mode for comfortable reading in low-light conditions.
- **Pagination:** Browse through multiple pages of news articles.

## Tech Stack
### Frontend
- React.js
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- React Router (for navigation)

### Backend
- Node.js
- Express.js
- Sequelize (PostgreSQL ORM)
- News API

## Prerequisites
Before running this project, make sure you have:
- Node.js (v14 or higher)
- PostgreSQL
- News API Key (Get one from [NewsAPI.org](https://newsapi.org))

## Installation
### Clone the Repository
```bash
git clone https://github.com/yourusername/headline.git
cd headline
```

### Install Dependencies for Both Frontend and Backend
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

### Set Up Environment Variables
Create a `.env` file in the `server` directory with the following variables:
```env
PORT=3001
NEWS_API_KEY=your_api_key_here
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_URL=your_database_url (optional)
```

### Initialize the Database
```bash
cd server
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

## Running the Application
### Start the Backend Server
```bash
cd server
npm start
```

### Start the Frontend Development Server
```bash
cd client
npm run dev
```
The application will be available at [http://localhost:5173](http://localhost:5173)

## Project Structure
```
headline/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── assets/        # CSS and static files
│   │   ├── components/    # React components
│   │   ├── interfaces/    # TypeScript interfaces
│   │   ├── pages/         # Page components
│   │   └── utils/         # Utility functions
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── api/              # API services
    ├── config/           # Configuration files
    ├── models/           # Database models
    ├── routes/           # API routes
    └── package.json
```

## API Endpoints
- **GET /api/article:** Get paginated news articles
- **GET /api/article?category={category}:** Get articles by category
- **GET /api/sources:** Get available news sources

## Contributing
1. Fork the repository
2. Create a new branch:
   ```bash
   git checkout -b feature/improvement
   ```
3. Make your changes
4. Commit your changes:
   ```bash
   git commit -am 'Add new feature'
   ```
5. Push to the branch:
   ```bash
   git push origin feature/improvement
   ```
6. Create a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- News data provided by [News API](https://newsapi.org)
- Icons from [Lucide](https://lucide.dev)
- UI components inspired by [Tailwind UI](https://tailwindui.com)



News data provided by News API
Icons from Lucide
UI components inspired by Tailwind UI
