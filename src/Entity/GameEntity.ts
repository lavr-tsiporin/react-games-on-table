import { PlayerEntity } from "./PlayerEntity";
import { BoardEntity } from "./BoardEntity";
import { FigureEntity } from "./FigureEntity";

export class Game {
  constructor(
    private board: BoardEntity = new BoardEntity(),
    private player: PlayerEntity = new PlayerEntity(1),
    private figures: FigureEntity = new FigureEntity(),
  ) {}
}
