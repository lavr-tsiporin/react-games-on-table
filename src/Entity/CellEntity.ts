import { LetterEntity } from "./LetterEntity";

export class CellEntity {
  constructor(
    public x: number = 0,
    public y: number = 0,
    public id: number | null,
    public letter: LetterEntity | null = null,
  ) {
    if (this.id !== null) {
      this.letter = new LetterEntity(this, this.id);
    }
  }

  public isEmptyVertical(target: CellEntity): boolean {
    if (this.x !== target.x) {
      return false;
    }
    return true;
  }

  public isEmptyHorizontal(target: CellEntity): boolean {
    if (this.y !== target.y) {
      return false;
    }
    return true;
  }

  private setCell(letter: LetterEntity) {
    this.letter = letter;
    this.letter.cell = this;
  }

  public moveLetter(target: CellEntity, nullCell: CellEntity) {
    if (this.letter?.isCanMove(target, nullCell)) {
      nullCell.setCell(this.letter);
      this.letter = null;
    }
  }
}
