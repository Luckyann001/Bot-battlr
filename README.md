Bot Battlr

Welcome to Bot Battlr — the one and only spot in the known universe where you can build your own bot army!
This React app allows users to view, enlist, and release bots from a local JSON server database.

 Project Overview

As a galactic web developer, your mission was to create a web application that allows the overlord to:

View all available bots.

Enlist bots into their personal army.

Release or permanently discharge bots.

 Features

View all bots from the backend.
 Enlist a bot to Your Bot Army (only once).
Release a bot from your army (remove from army view).
 Discharge a bot permanently (deletes from backend).
Organized, reusable React components using props and state.

⚙️ Tech Stack

Frontend: React.js (Create React App)

Backend: JSON Server (mock REST API)

Language: JavaScript (ES6+)

Styling: CSS

 Project Structure
bot-battlr/
│
├── db.json                 # Local backend database
├── package.json
├── README.md
│
└── src/
    ├── App.js              # Main component
    ├── index.js            # Entry point
    ├── index.css           # Global styles
    └── components/
        ├── BotCard.js
        ├── BotCollection.js
        ├── YourBotArmy.js
        └── BotSpecs.js

 How to Run the Project
1️ Clone or open the project

If you downloaded the zip:

cd bot-battlr

2️ Install dependencies
npm install

3️ Start the backend

In a new terminal tab, run:

npx json-server --watch db.json --port 8001


Test it in your browser:
http://localhost:8001/bots

You should see a list of bot objects in JSON format.

4️Start the React frontend

In another terminal tab:

npm start


The app will open automatically at:
 http://localhost:3000

Core Functionality
Action	Description
Fetch Bots	GET /bots
Delete Bot	DELETE /bots/:id
Enlist Bot	Add a bot to Your Bot Army (state update only)
Release Bot	Remove bot from Your Bot Army
Discharge Bot	Delete from both Your Bot Army and backend
🧪 Example Bot Object
{
  "id": 101,
  "name": "wHz-93",
  "health": 94,
  "damage": 20,
  "armor": 63,
  "bot_class": "Support",
  "catchphrase": "1010010101001101100011000111101",
  "avatar_url": "https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1"
}


 Developer Notes

Keep your JSON server running while using the app.

Always use the correct fetch endpoint:

http://localhost:8001/bots


Make sure you’re inside the correct folder before running any npm commands.

 Author

Developed by Luckyann Kagendo
For Phase 2 Code Challenge (React & JSON Server)