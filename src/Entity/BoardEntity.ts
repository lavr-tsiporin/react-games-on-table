import { CellEntity } from "./CellEntity";
export class BoardEntity {
  cells: CellEntity[][] = [];

  public initCell() {
    //FIXME забирать размер поля из контекста
    const flatCells = Array(4 * 4)
      .fill(1)
      .map((_, i) => ({ id: i + 1 === 4 * 4 ? null : i + 1 }));
    const randomCells = this.randomizeCells(flatCells);
    const cells = this.createCells(this.restoreCells(randomCells));
    console.log(cells);

    this.cells = cells;
  }

  private getCell(x: number, y: number): CellEntity {
    return this.cells[y][x];
  }

  public getCopyBoard(): BoardEntity {
    const newBoard = new BoardEntity();
    newBoard.cells = this.cells;
    return newBoard;
  }

  private createCells(array: { id: number | null }[][]) {
    return array.map((row, idxRow) => {
      return row.map((cell, idxCell) => {
        return new CellEntity(idxRow, idxCell, cell.id);
      });
    });
  }

  private restoreCells(
    cells: { id: number | null }[],
  ): { id: number | null }[][] {
    return cells.reduce((acc: { id: number | null }[][], next, i) => {
      if (i % 4 === 0) {
        acc.push([]);
      }
      acc.at(-1)?.push(next);
      return acc;
    }, []);
  }

  private randomizeCells(cells: { id: number | null }[]) {
    return cells
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  }

  public nullCell() {
    return this.cells.flat().filter((cell) => cell.letter === null)[0];
  }
}
