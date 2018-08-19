class Barcode {
  public static nextIdentifier = 1;

  public id = 0;
  public value = "";

  constructor(value: string) {
    this.value = value;
    this.id = Barcode.nextIdentifier;
    Barcode.nextIdentifier += 1;
  }
}

export default Barcode;
