import { CellEntity } from "./CellEntity";
import { FigureEntity } from "./FigureEntity";

export class LetterEntity extends FigureEntity {
  public isCanMove(target: CellEntity, nullCell: CellEntity): boolean {
    super.isCanMove();
    if (target.isEmptyVertical(nullCell)) {
      const dy = Math.abs(nullCell.y - target.y);
      if (dy === 1) {
        return true;
      }
      return false;
    }
    if (target.isEmptyHorizontal(nullCell)) {
      const dx = Math.abs(nullCell.x - target.x);
      if (dx === 1) {
        return true;
      }
      return false;
    }
    return false;
  }
}
