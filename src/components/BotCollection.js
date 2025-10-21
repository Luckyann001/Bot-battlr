import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, onAddToArmy, onViewDetails }) {
  return (
    <div className="bot-collection">
      {bots.map((bot) => (
        <BotCard
          key={bot.id}
          bot={bot}
          onAddToArmy={onAddToArmy}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}

export default BotCollection;
