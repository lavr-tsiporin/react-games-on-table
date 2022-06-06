import React, { FC } from "react";
import { CellEntity } from "../../Entity/CellEntity";
import "./Cell.css";

interface CellProps {
  cell: CellEntity;
  click: (cell: CellEntity) => void;
}

const Cell: FC<CellProps> = ({ cell, click }) => {
  return (
    <div
      className={[
        "cell",
        cell.letter && cell.letter.cost !== null ? "" : "null",
      ].join(" ")}
      onClick={() => click(cell)}
      data-id={cell.letter?.cost}
      data-x={cell.x}
      data-y={cell.y}
    >
      {cell.letter && <span>{String(cell.letter.cost)}</span>}
    </div>
  );
};

export default Cell;
