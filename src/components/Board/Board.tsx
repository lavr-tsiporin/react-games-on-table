import React, { FC } from "react";
import { BoardEntity } from "../../Entity/BoardEntity";
import Cell from "../Cell/Cell";
import { CellEntity } from "../../Entity/CellEntity";
import { PlayerEntity } from "../../Entity/PlayerEntity";
import "./Board.css";

interface BoardProps {
  board: BoardEntity;
  setBoard: (board: BoardEntity) => void;
  player: PlayerEntity;
}

const Board: FC<BoardProps> = ({ board, setBoard, player }) => {
  function click(cell: CellEntity) {
    if (cell.letter?.isCanMove(cell, board.nullCell())) {
      cell.moveLetter(cell, board.nullCell());
      player.incrementCount();
      updateBoard();
    }
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className="board">
      {board.cells.map((row, idx) => {
        return (
          <React.Fragment key={idx}>
            {row.map((cell, i) => {
              return <Cell cell={cell} key={cell.id} click={click} />;
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Board;
