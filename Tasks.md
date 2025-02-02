# Descripción

Una empresa del sector e-commerce nos ha solicitado una aplicación web que le permita ofrecer la compra de sus productos a través de internet.

Serás el encargado/a de montar una versión inicial de demostración de la aplicación para el cliente: gestión del carrito de compra y aplicación de promociones sobre el precio final.

## Notas

Tienes las siguientes indicaciones del responsable de front-end:

- Dispones de la base del proyecto sobre la cual trabajar, para que puedas centrarte en programar la lógica:
  👉 github.com/IT-Academy-BCN/starter-code-frontend-shop
- Como de momento no consumimos datos de un servidor usando una API, trabajaremos con datos hardcodeados en la aplicación. Implementaremos la lógica utilizando un pequeño grupo de 9 productos divididos en 3 secciones.
- La lógica a implementar debe colocarse en los archivos src/shop.js y src/checkout.js. Verás que ya se han creado las funciones vacías con el objetivo de que las vayas completando.
- El itinerario está planteado para comenzar a utilizar ES6 o superior en el siguiente sprint, pero si ya lo conoces, puedes utilizarlo en este sprint.
- Te recomendamos debatir los ejercicios con tus compañeros/as, pedir su ayuda o, mejor aún, ayudar a otros, ya que está demostrado que cuando enseñas algo es cuando mejor se aprende.

## Información de los datos a manipular

Se trata de un array de 9 productos. Cada elemento del array es un objeto que contiene la información de cada producto del e-commerce. A continuación, se muestra un ejemplo de un producto:

{
"id": 1,
"name": "cooking oil",
"price": 10.5,
"type": "grocery"
}

Estos datos del array products no deben modificarse.

## Nivel 1

### Ejercicio 1

Dado que es un e-commerce, el usuario debe poder añadir productos al carrito.

Debes completar la función buy(), que recibe el identificador del producto a añadir. Debes localizar el producto en el array products utilizando este identificador y luego incluirlo en el array cart.

Los botones que disparan la función buy() son los de color azul que se encuentran en cada producto.

Para cada producto añadido al carrito, hay que validar si ya existe en cart:

- Si no existe, lo añadimos con la propiedad quantity establecida en 1.
- Si ya existe, incrementamos su cantidad (quantity).

### Ejercicio 2

Ahora implementaremos una función que permita al usuario vaciar el carrito.

Debes completar la función cleanCart(), que debe reinicializar la variable cartList.

### Ejercicio 3

¡Genial! El e-commerce va tomando forma. Ahora debemos calcular el total del importe del carrito.

Debes implementar un bucle for para sumar el importe de todos los productos en el carrito.

### Ejercicio 4

Para mejorar la tienda, debemos implementar promociones en los productos.

El cliente ha solicitado dos tipos de promociones:

1. Si el usuario compra 3 o más botellas de aceite, el precio del producto se reduce un 20%.
2. Si el usuario compra 10 o más productos de repostería, el precio del producto se reduce un 30%.

Debes completar la función applyPromotionsCart(), que recibe el array cart y modifica la propiedad subtotalWithDiscount en los productos que aplican para un descuento.

💡 Consejo:

- Si un producto tiene descuento, guarda el precio total con descuento en subtotalWithDiscount.
- Si no aplica descuento, no es necesario guardar nada.

### Ejercicio 5

Ahora toca mostrar el carrito de compra al usuario.

El código encargado de mostrar el carrito en el modal con id "cartModal" debe incluirse en la función printCart(). La maquetación de la tabla de productos ya está creada, solo hay que hacerla dinámica.

El modal del carrito se abre al pulsar el icono del carrito en la parte superior derecha de la pantalla.

### Ejercicio 6

Hasta ahora, solo hemos trabajado en la pantalla principal de la tienda. Ahora implementaremos la validación del formulario de checkout en checkout.js.

Para acceder a esta pantalla, haz clic en el icono del carrito en la parte superior derecha, y dentro del modal habrá un botón que te llevará a la pantalla de checkout.

Debes validar el formulario checkout.html asegurando que los campos cumplan las siguientes condiciones:

✅ Requisitos de validación:

- Todos los campos son obligatorios.
- Todos los campos deben tener al menos 3 caracteres.
- El nombre y apellidos deben contener solo letras.
- El teléfono debe contener solo números.
- La contraseña debe incluir números y letras.
- El email debe tener un formato válido.

Cuando el usuario introduzca un valor no válido, el input debe resaltarse en rojo y mostrar un mensaje de error debajo.

💡 Consejo: Puedes cambiar el borde del input a rojo y mostrar el mensaje manipulando el DOM. También puedes utilizar la clase is-invalid de Bootstrap.

## Nivel 2

### Ejercicio 7

¡Felicidades! Ya tienes las funciones principales de la tienda implementadas.

Ahora añadiremos una funcionalidad esencial: quitar productos del carrito.

Debes completar la función removeFromCart(), que recibe el identificador del producto y debe reducir su cantidad en 1.

📌 Reglas:

- Si la cantidad del producto es 1, debe eliminarse del carrito.
- Si es mayor a 1, simplemente se reduce la cantidad.
- No olvides actualizar las promociones.

## Nivel 3

### Ejercicio 8

¡Has llegado al final! 🎉

Para que la demo esté lista para el cliente, necesitamos mejorar la maquetación y hacer que la web tenga una apariencia más profesional.

💡 Consejo: Usa estilos CSS, Bootstrap o cualquier otra herramienta para mejorar la presentación de la tienda.
