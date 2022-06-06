import { CellEntity } from "./CellEntity";
export class FigureEntity {
  constructor(
    public cell: CellEntity | null = null,
    public cost?: number | null,
  ) {}

  public isCanMove(...args: any): boolean {
    return false;
  }
}
