import React, { useEffect, useState } from "react";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import BotSpecs from "./components/BotSpecs";
import "./App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [yourBots, setYourBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    fetch("https://json-server-vercel-bkd05125x-luckyanns-projects.vercel.app/bots")
      .then((res) => res.json())
      .then((data) => setBots(data));
  }, []);

  const addBotToArmy = (bot) => {
    if (!yourBots.find((b) => b.id === bot.id)) {
      setYourBots([...yourBots, bot]);
    }
  };

  const removeBotFromArmy = (bot) => {
    setYourBots(yourBots.filter((b) => b.id !== bot.id));
  };

  const deleteBot = (bot) => {
    fetch(`("https://json-server-vercel-bkd05125x-luckyanns-projects.vercel.app/bots"${bot.id}`, { method: "DELETE" })
      .then(() => {
        setBots(bots.filter((b) => b.id !== bot.id));
        setYourBots(yourBots.filter((b) => b.id !== bot.id));
      });
  };

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onBack={() => setSelectedBot(null)}
          onAddToArmy={addBotToArmy}
        />
      ) : (
        <>
          <YourBotArmy
            bots={yourBots}
            onRemove={removeBotFromArmy}
            onDelete={deleteBot}
          />
          <BotCollection
            bots={bots}
            onViewDetails={setSelectedBot}
            onAddToArmy={addBotToArmy}
          />
        </>
      )}
    </div>
  );
}

export default App;
