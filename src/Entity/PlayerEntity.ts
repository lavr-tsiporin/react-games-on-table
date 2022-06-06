export class PlayerEntity {
  constructor(private count: number = 0, public win: boolean = false) {}

  public incrementCount() {
    this.count++;
  }

  get getCount() {
    return this.count;
  }
}
