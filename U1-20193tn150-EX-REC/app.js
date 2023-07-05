const carrito = {
    productos: [],
    folio:'',
    subTotal:0,
    total:0
}

const producto = {
    nombre:'',
    precio:0,
    cantidad:0,
    calcularTotal: () => {
        return this.cantidad * this.precio;
    }
}


function agregarProducto(){
    let nombre = document.getElementById('nombreInput').value
    let precio = document.getElementById('precioInput').value
    let cantidad = document.getElementById('cantidadInput').value

    producto.nombre = nombre;
    producto.precio = parseInt(precio);
    producto.cantidad = parseInt(cantidad);
    

    agregarAlCarrito(producto)
}

function agregarAlCarrito(producto){
    carrito.productos.push(producto);

    let min = 1000;
    let max = 5000;
    let x = Math.floor(Math.random()*(max-min+1)+min);
    carrito.folio = x;
    console.log(carrito);
}



function totalPagar(){
    let sub = 0;
    let iva;
    let total;
    carrito.productos.forEach(e => {
        sub = sub + e.calcularTotal();
        console.log(e);
    });

    iva = sub * 0.16;
    total = sub + iva;

    
    console.log(sub + " " + total);
    //return sub, iva;
}