import React, { FC } from "react";
import { PlayerEntity } from "../../Entity/PlayerEntity";
import { Alert } from "../Alert/Alert";

interface PlayerProps {
  player: PlayerEntity;
}

export const Stats: FC<PlayerProps> = ({ player }) => {
  return (
    <React.Fragment>
      <h3 className="stats">Счет: {String(player.getCount)}</h3>
      <Alert win={player.win} />
    </React.Fragment>
  );
};
