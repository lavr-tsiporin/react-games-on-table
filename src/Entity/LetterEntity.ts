import { CellEntity } from "./CellEntity";

export class LetterEntity {
  cell!: CellEntity;

  constructor(public cost: number | null) {}

  public isCanMove(target: CellEntity, nullCell: CellEntity): boolean {
    console.log("target", target);
    console.log("nullCell", nullCell);

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
