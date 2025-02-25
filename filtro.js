// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "assets/taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "assets/taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "assets/bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "assets/bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "assets/zapato-rojo.jpg"}
]; //Le agregué ;

// Selección de elementos del HTML
const listaProductos = document.getElementById("lista-de-productos"); //Usar getEmentById en lugar de get ElementByName
const input = document.querySelector("input[type='text']"); //Seleccionar bien el input ya que no tiene una clase
const botonFiltro = document.querySelector("button");

// Función para mostrar productos
function mostrarProductos(productos) {
  listaProductos.innerHTML = ""; //Para limpiar la lista antes de agregar un nuevo producto

  //Recorrer cada producto y crear un elemento HTML para mostrarlo
  productos.forEach(producto => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("producto");

    const nombreProducto = document.createElement("p"); // para el nombre del producto
    nombreProducto.textContent = producto.nombre;

    const imagenProducto = document.createElement("img");
    imagenProducto.src = producto.img;

    divProducto.appendChild(nombreProducto); // agregar el nombre y la imagen al div 
    divProducto.appendChild(imagenProducto);

    listaProductos.appendChild(divProducto); // agregar el producto a la lista
  });
}

// Mostrar todos los productos en la página
mostrarProductos(productos);

// filtrar productos
function filtrarProductos(texto) {
  // Convertir el texto a minúsculas para que no interfiera que hubieran mayúsculas
  texto = texto.toLowerCase();

  //Usar toLowerCase() en el texto y en los valores de los productos.
  const productosFiltrados = productos.filter(producto => {
    return (
      producto.nombre.toLowerCase().includes(texto) ||
      producto.tipo.toLowerCase().includes(texto) ||
      producto.color.toLowerCase().includes(texto)
    );
  });

  mostrarProductos(productosFiltrados);
}

botonFiltro.addEventListener("click", () => { // se cambió botonDeFiltro.onclick ya que no es el mejor para manejar eventos y se cambio a addEventListener.
  const texto = input.value; 
  filtrarProductos(texto); 
});