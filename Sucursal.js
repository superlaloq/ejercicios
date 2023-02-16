export class Sucursal{
    constructor(id,nombre){
      this.id = id
      this.nombre = nombre
      this.productos = []
    };

  async  listaSucursal(){
      const endPoint ='https://bsite.net/metalflap/td-sucursal'
      const response = await fetch (endPoint)
      const data =await response.json()
      
      return data
      
  }

};

