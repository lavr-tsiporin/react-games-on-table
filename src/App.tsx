import React, { useEffect, useState } from "react";
import { options, OptionsContext, Options } from "./context/options";
import "./App.css";
import Board from "./components/Board/Board";
import { BoardEntity } from "./Entity/BoardEntity";
import { PlayerEntity } from "./Entity/PlayerEntity";
import { Stats } from "./components/Stats/Player";

interface InitialGame {
  board: BoardEntity;
  player: PlayerEntity;
}

const initialGame: InitialGame = {
  board: new BoardEntity(),
  player: new PlayerEntity(1),
};

function App() {
  const [board, setBoard] = useState<BoardEntity>(initialGame.board);
  const [player, setPlayer] = useState<PlayerEntity>(initialGame.player);

  const [optionsContext, setOptionsContext] = React.useState<Options>(options);

  useEffect(() => {
    restart();
  }, []);

  function restart() {
    const newBoard = new BoardEntity();
    const newPlayer = new PlayerEntity(1);
    newBoard.initCell();
    // newBoard.addLetters();
    setBoard(newBoard);
    setPlayer(newPlayer);
  }

  return (
    <OptionsContext.Provider value={{ optionsContext, setOptionsContext }}>
      <div className="app">
        <h2 className="title">Игра в пятнашки</h2>
        <Stats player={player} />
        <Board board={board} setBoard={setBoard} player={player} />
        <button className="btn btn-ok btn-shuffle" onClick={() => restart()}>
          перемешать
        </button>
      </div>
    </OptionsContext.Provider>
  );
}

export default App;
