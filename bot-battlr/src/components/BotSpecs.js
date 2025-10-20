import React from "react";

function BotSpecs({ bot, onAddToArmy, onBack }) {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>{bot.catchphrase}</p>

      <button onClick={() => onAddToArmy(bot)}>Add to Army</button>
      <button onClick={onBack}>Back to List</button>
    </div>
  );
}

export default BotSpecs;
