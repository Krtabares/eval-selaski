Aquí tienes el contenido del `README.md` en un solo bloque:

```markdown
# Proyecto de Ventas de Carros

Este es un proyecto de gestión de ventas de carros utilizando NestJS, Prisma y TypeScript.

## Requisitos

- Node.js (v14 o superior)
- NPM (v6 o superior)
- PostgreSQL o MySQL (según la configuración de Prisma)

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd ventas-selaski
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Configura la base de datos:**

   - Crea una base de datos en PostgreSQL o MySQL.
   - Actualiza el archivo `.env` con la información de conexión a la base de datos:

     ```plaintext
     DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DB_NAME"
     # o para MySQL
     DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DB_NAME"
     ```

4. **Ejecuta las migraciones de Prisma:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Ejecuta el seeder (opcional):**

   Si deseas añadir datos de ejemplo a tu base de datos, puedes ejecutar el seeder:

   ```bash
   npx prisma db seed
   ```

## Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run start:dev
```

El servidor estará disponible en `http://localhost:3000`.

## Endpoints

### Listar Carros

- **GET** `/cars?page={número}&limit={número}&search={término}`

### Crear Carro

- **POST** `/cars`
  
  ```json
  {
      "title": "Título del carro",
      "description": "Descripción del carro",
      "price": 20000,
      "date": "2024-09-19",
      "imageUrl": "https://url-de-la-imagen.com"
  }
  ```

### Actualizar Carro

- **PUT** `/cars/{id}`

### Eliminar Carro

- **DELETE** `/cars/{id}`

## Documentación

La documentación de la API se puede generar utilizando Swagger. Asegúrate de que el módulo Swagger esté habilitado y accede a `http://localhost:3000/api`.

## Contribución

Las contribuciones son bienvenidas. Siéntete libre de enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.
```

Puedes copiar este texto directamente en un archivo llamado `README.md` en tu proyecto. Asegúrate de ajustar `<URL_DEL_REPOSITORIO>` y otros detalles específicos según sea necesario.