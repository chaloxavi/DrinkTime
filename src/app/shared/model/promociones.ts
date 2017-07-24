export class Promociones {
    constructor(
      public $key: string,
      public promocion_name: string,
      public promocion_tipo: string,
      public promocion_precio: string,
      public promocion_lugar:string,
      public promocion_descripcion: string,
      public userId: string
    ){
    }
    static fromJsonList(arrayOfSkillObservables):Promociones[] {
  return arrayOfSkillObservables.map(inputJsonSingleSkill =>
    Promociones.fromJson(inputJsonSingleSkill));
}
  static fromJson({
    $key,
    promocion_name,
    promocion_tipo,
    promocion_precio,
    promocion_lugar,
    promocion_descripcion,
    userId}):Promociones {
  return new Promociones($key, promocion_name, promocion_tipo,promocion_precio,promocion_lugar,promocion_descripcion,userId);
  }
}