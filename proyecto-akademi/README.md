# Proyecto Entregable - Gestión de Productos Tecnológicos

**Programa:** Famme Akademi - Vortex IT  
**Tecnología:** React + Redux Clásico

---

## Objetivo

Aplicación en **React** con **Redux Clásico** para gestionar un inventario de productos.  
La aplicación permite:

- Alta, Baja y Modificación de productos (ABM).
- Funcionalidades: **paginación**, **búsqueda**, **filtrado** y **ordenamiento**.
- Uso de **JSON Server** para simular una API REST.

---

## Tecnologías y Herramientas

- React.js
- Redux Clásico
- React Router
- JSON Server
- Redux DevTools (opcional)

---

## Requisitos

1. ABM: Alta, baja y modificación de productos.
2. Paginación: Mostrar X productos por páginas.
3. Filtro: Filtrar productos por categoría.
4. Búsqueda: Buscar por nombre o categoría.
5. Ordenamiento: Por precio o nombre.
6. Detalle de producto: Vista individual con toda la info.
7. Redux: Uso obligatorio de Redux Clásico.
8. Validaciones: Formularios con validaciones (precio, stock, etc.).

---

## Modelo de Datos (Entidad Producto)

# js

{
id: number,
name: string,
category: string,  
 price: number,
stock: number,
description: string,
image_url?: string  
}

## Pantallas y Funcionalidades

# Vista Principal /

- Lista de productos.
- Paginación.
- Búsqueda por nombre.
- Filtros.
- Ordenamiento.

## Detalle/Edición de Producto /product/:id

Muestra todos los atributos del producto.

Botón Editar: Navega a página de formulario para modificar.

Botón Guardar: Actualiza en Redux y JSON Server.

Botón Cancelar: Navega a inicio.

# Validaciones:

El precio debe ser numérico y mayor a 0.

El stock no puede ser negativo.

## Crear Producto /add-product

Formulario con todos los campos del modelo.

Validaciones al enviar.

Feedback visual: “Producto agregado correctamente”.

Redirección a la vista principal.

## Navbar

Link a Inicio /

Link a Agregar Producto /add-product

## Endpoints:

GET /products → Listar productos

POST /products → Agregar producto

DELETE /products/:id → Eliminar producto

PUT /products/:id → Editar producto

## Instrucciones de Instalación y Ejecución

Clonar el repositorio:

## Instalar dependencias:

npm install

## Iniciar la aplicación:

npm start


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
