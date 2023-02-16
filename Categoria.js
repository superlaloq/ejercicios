export class Categoria{
    constructor(id,nombre){
      this.id = id
      this.nombre = nombre
      this.productos = []
    };
  
  async  listaCategorias(){
      const endPoint = 'https://bsite.net/metalflap/td-categoria'
      const response = await fetch (endPoint)
      const data = await response.json()
      
      return data
  }

};
