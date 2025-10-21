import React from "react";

function BotCard({ bot, onAddToArmy, onViewDetails, onRemove, onDelete }) {
  return (
    <div className="bot-card" onClick={() => onViewDetails && onViewDetails(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.bot_class}</p>
      <p>⚔️ {bot.damage} | 🛡 {bot.armor} | ❤️ {bot.health}</p>
      <p><i>{bot.catchphrase}</i></p>

      {onAddToArmy && (
        <button onClick={(e) => { e.stopPropagation(); onAddToArmy(bot); }}>
          Add to Army
        </button>
      )}

      {onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove(bot);
          }}
        >
          Remove
        </button>
      )}

      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(bot);
          }}
          className="delete"
        >
          ❌ Delete
        </button>
      )}
    </div>
  );
}

export default BotCard;
