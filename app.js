const pizzas = [
    {
        id: 1,
        nombre: "Muzzarella",
        ingredientes: ["muzzarella", "salsa"],
        precio: 800
    },
    {
        id: 2,
        nombre: "Jamón y Morrón",
        ingredientes: ["muzzarella", "jamón", "morrón", "salsa"],
        precio: 300
    },
    {
        id: 3,
        nombre: "fugazzeta",
        ingredientes: ["muzzarella", "cebolla"],
        precio: 120
    },
    {
        id: 4,
        nombre: "4 quesos",
        ingredientes: ["muzzarella", "gorgonzola", "parmesano", "fotntina"],
        precio: 800
    }
]

// Las pizzas que tengan un id impar.
let impares = pizzas.filter((pizza) => pizza.id % 2 !== 0);
let baratas = pizzas.filter((pizza) => pizza.precio < 600);
console.log(`Las pizzas que tengan un id impar: ${impares.map(impar => impar.nombre)}`)
console.log(`Las pizzas valen menos de 600: ${baratas.map(barata => barata.nombre)}`)
console.log(`Todas las pizzas: ${pizzas.map(pizza => pizza.nombre)}`)
console.log(`Todas los precios: ${pizzas.map(pizza => pizza.precio)}`)
console.log(`Pizzas y sus precios:
${pizzas.map(pizza => `${pizza.nombre}: $${pizza.precio}\n`)}`)