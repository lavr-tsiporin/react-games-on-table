export class PlayerEntity {
  constructor(private count: number = 0) {}

  public incrementCount() {
    this.count++;
  }

  get getCount() {
    return this.count;
  }
}
