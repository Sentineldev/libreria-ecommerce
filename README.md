Desarrollo de un E-Commerce como proyecto final de la materia Comercio Electronico de la universidad de Oriente 2024.


# Estructuracion del proyecto

Base de datos `PostgreSQL`
Servidor Backend `TypeScript - NestJs`
Frontend `TypeScript - React`

# Instalacion del proyecto

1. Clonar el repository `https://github.com/Sentineldev/libreria-ecommerce`
2. Ejecutar el comando `npm i` para instalar todas las dependencias necesarias tanto frontend como backend.
3. Ejecutar el DDL que se encuentra en `apps/api/database/ddl.sql` para inicializar las tablas correctamente.
4. Crear un archivo `.env` con las propiedades que se encuentran en el archivo `.env.example` de cada proyecto correspondiente frontend/backend.


# Correr el proyecto en modo desarrollo

1. ejecutar el comando `npm run dev` este se encargara de correr tanto el frontend como el backend.


# Correr el proyecto en modo produccion.

1. Ejecutar el comando `npm run build` para realizar las optimizaciones necesarias de cada proyecto.
2. Ejecutar el comando `npm run start` este se encargara de correr el backend y desde este mismo servir el frontend.