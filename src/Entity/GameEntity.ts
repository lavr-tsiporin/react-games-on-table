import { PlayerEntity } from "./PlayerEntity";
import { BoardEntity } from "./BoardEntity";
export class Game {
  constructor(
    private board: BoardEntity = new BoardEntity(),
    private player: PlayerEntity = new PlayerEntity(1),
  ) {}

  private isWinner(): boolean {
    const letterCost = this.board.cells
      .flat()
      .map((cell) => cell.letter?.cost)
      .sort((a, b) => Number(b) - Number(a));

    return letterCost.every((i, idx) => {
      if (idx === letterCost.length - 1) {
        return true;
      }
      if (Math.abs(Number(i) - Number(letterCost[idx + 1])) === 1) {
        return true;
      }
      return false;
    });
  }

  public winner() {
    if (this.isWinner()) {
      this.player.win = true;
    }
  }
}
