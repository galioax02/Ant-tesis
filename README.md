README - Configuración, desarrollo y deploy
1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>
2. Instalar dependencias
Asegúrate de tener Node.js >=16 instalado.
npm install
3. Configurar variables de entorno
Crea un archivo .env.local en la raíz del proyecto (Next.js) o .env (React).
Agrega las siguientes variables (reemplaza <valor> por los correctos):
SHAPEDIVER_CLIENT_ID=<tu_client_id>
SHAPEDIVER_CLIENT_SECRET=<tu_client_secret>
API_URL=<tu_api_url>
OTRA_VARIABLE=<otro_valor>
Nota: las variables públicas en Next.js deben empezar con NEXT_PUBLIC_.
4. Crear y configurar un modelo en ShapeDiver
Regístrate o inicia sesión en ShapeDiver con la prueba gratuita Business.
Crea un nuevo modelo desde tu archivo 3D (Rhino/Grasshopper).
Añade los parámetros que quieres exponer y cambia los nombres según la lista esperada:
[nombre_propiedad_1, nombre_propiedad_2, nombre_propiedad_3, ...]
Habilita en la configuración del modelo:
Iframe embedding
Allow direct embedding
Publica el modelo y copia su Model ID o URL para usarlo en tu .env.
5. Actualizar credenciales en el proyecto
Ve a la carpeta del repositorio:
componentes/viewer
Abre el archivo de configuración del viewer y actualiza:
SHAPEDIVER_CLIENT_ID
SHAPEDIVER_CLIENT_SECRET
URL o ID del modelo, si cambió.
6. Correr el proyecto en desarrollo
Next.js
npm run dev
React
npm start
El proyecto se abrirá en http://localhost:3000.
7. Subir cambios a Netlify
Agrega tus cambios al repositorio:
git add .
git commit -m "Actualizar configuración de ShapeDiver y variables de entorno"
git push origin main
En Netlify, revisa las variables de entorno:
Site settings → Build & deploy → Environment
Actualiza correo, contraseña o cualquier otra variable si es necesario.
Netlify detectará el push y hará build automático.
8. Notas importantes
Nunca subir tu .env con claves secretas al repositorio.
Si cambias el modelo de ShapeDiver o sus propiedades, actualiza el .env y el viewer en componentes/viewer.
Para problemas de dependencias:
rm -rf node_modules package-lock.json
npm install