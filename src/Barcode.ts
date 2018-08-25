class Barcode {
  public static nextIdentifier = 1;

  public id = 0;
  public isSelected = false;
  public value = "";

  constructor(
    value: string,
    id: number | null = null,
    isSelected: boolean = false
  ) {
    this.value = value;
    this.isSelected = isSelected;

    if (id) {
      this.id = id;
    } else {
      this.id = Barcode.nextIdentifier;
      Barcode.nextIdentifier += 1;
    }
  }
}

export default Barcode;
