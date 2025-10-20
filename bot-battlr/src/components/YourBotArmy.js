import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, onRemove, onDelete }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      {bots.length === 0 ? <p>No bots enlisted yet.</p> : null}
      <div className="army-grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onRemove={onRemove}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
