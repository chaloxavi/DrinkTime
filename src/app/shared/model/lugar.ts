export class Lugar {
  constructor(
      public $key: string,
      public lugar_name: string,
      public description: string,
      public userId: string
    ){

  }

static fromJsonList(arrayOfLugarObservables):Lugar[] {
  return arrayOfLugarObservables.map(inputJsonSingleLugar =>
    Lugar.fromJson(inputJsonSingleLugar));
}
  static fromJson({
    $key,
    lugar_name,
    description,
    userId}):Lugar {
  return new Lugar($key, lugar_name, description, userId);
  }
}