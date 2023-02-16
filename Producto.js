export class Producto{
      constructor(id,nombre){
        this.id = id
        this.nombre = nombre
        this.producto = []
      }

    async  listaProductos(){
        const endPoint ='https://bsite.net/metalflap/td-producto'
        const response = await fetch(endPoint)
        const data = await response.json()
       
        return data 
    }

};
