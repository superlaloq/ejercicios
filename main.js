import { Categoria } from "./Categoria.js";
import { Producto } from "./Producto.js";
import { Sucursal } from "./Sucursal.js";
// Importe de la api...

const selectCategorias = document.querySelector("#Categorias");
const categoria = new Categoria;
const resCategoria = categoria.listaCategorias();
resCategoria.then(data => {
    data.forEach(r => {
        const opt = document.createElement("option");
        opt.value = r.id;
        opt.innerText = r.nombre;
        selectCategorias.appendChild(opt);
    });
});

const selectProducto = document.querySelector("#Productos");
const producto = new Producto;
let resProducto = producto.listaProductos();
resProducto.then(data => {
    data.forEach(r => {
        const opt = document.createElement("option");
        opt.value = r.id;
        opt.innerText = r.nombre;
        selectProducto.appendChild(opt);
    });
});

const selectSucursal = document.querySelector("#Sucursal");
const sucursal = new Sucursal;
const resSucursal = sucursal.listaSucursal();
resSucursal.then(data => {
    data.forEach(r => {
        const opt = document.createElement("option");
        opt.value = r.id;
        opt.innerText = r.nombre;
        selectSucursal.appendChild(opt);
    });
});
