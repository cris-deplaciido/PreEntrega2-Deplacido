// constructor, array, objetos y push al array

class Producto {
    constructor (nombre, precio){
        this.nombre = nombre.toUpperCase()
        this.precio = precio
    }
}


const productos = []
const carrito = []

const silla = new Producto("silla", 5000)
const mesa = new Producto("mesa", 10000)
const sillon = new Producto("sillon", 12000)
const futon = new Producto("futon", 9000)
const cama = new Producto("cama", 9000)

productos.push(silla, mesa, sillon, futon, cama)

let seleccion = prompt("Bienvenido Deseas Comprar algun producto si o no").toLowerCase()

while(seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt("hola desea comprar algo si o no").toLowerCase()
}

if (seleccion == "si") {
    alert("a continuacion nuestra lista de productos")
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$"
);
alert(todosLosProductos.join(" - "))
}else if (seleccion == "no") {
alert("gracias por venir, hasta pronto")
}

while(seleccion != "no") {
    let producto = prompt("Agrega un producto a tu carrito").toLowerCase()
    let precio = 0

if (producto == "silla" || producto == "mesa" || producto == "sillon" || producto == "futon" || producto == "cama") {
switch (producto) {
    case "silla":
        precio = 5000;
        break;
    case "mesa":
        precio = 10000;
        break;
    case "sillon":
        precio = 12000;
        break;
    case "futon":
        precio = 9000;
        break;
    case "cama":
        precio = 8000;
        break;
    default:
        break;
} 
let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

carrito.push({producto, unidades, precio})
console.log(carrito)
} else {
    alert("no tenemos ese producto")
}

seleccion = prompt("desea seguir comprando??").toLowerCase()

while (seleccion === "no") {
    alert("gracias por la compra! hasta pronto")
    carrito.forEach((carritoFinal) => {
    console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, toltal a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
    })
    break;
    }
} 

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total} `)

