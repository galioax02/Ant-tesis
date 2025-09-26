# Antitesis
## 1. Clonar el repositorio (Primera vez)
git clone https://github.com/galioax02/Ant-tesis
cd antitesis/antitesis
## 2. Instalar dependencias (Primera vez)
Asegúrate de tener Node.js >=16 instalado.
npm install
## 3. Configurar variables de entorno (En caso de cambiar correo a usar)

Agrega las siguientes variables (reemplaza <valor> por los correctos): 

EMAIL_PASS=<contraseña>

EMAIL_USER=<email_para_envios>

## 4. Crear y configurar un modelo en ShapeDiver (Cada prueba gratuita)
Regístrate o inicia sesión en ShapeDiver con la prueba gratuita Business.
Crea un nuevo modelo desde tu archivo 3D (Rhino/Grasshopper V8).
Deja visualizados solo los atributos correctos
> **Configuraciones de ShapeDiver**
> 
> <img width="800" alt="image" src="https://github.com/user-attachments/assets/535cf9d5-3380-4b19-a254-9c0a80040747" />
>
> <img width="800" alt="image" src="https://github.com/user-attachments/assets/0e95ecf8-d25b-414c-a3a4-6c749bd3ed58" />
>
> <img width="800" alt="image" src="https://github.com/user-attachments/assets/bb31576e-f701-4bf4-8437-6e762399bc8e" />
>
> <img width="800" alt="image" src="https://github.com/user-attachments/assets/11276154-e7b0-49bd-88aa-df97fc888890" />
>
> <img width="800" alt="image" src="https://github.com/user-attachments/assets/510d9fe4-771d-48a3-a3d6-9fdc0954e9f5" />
>
> <img width="800" alt="image" src="https://github.com/user-attachments/assets/ed1278d2-0730-4d38-81d0-256046122d55" />

Habilita en la configuración del modelo:
* [x] Iframe embedding
* [x] Allow direct embedding
      
Publica el modelo y copia su ticket y modelviewurl

Configura los aspectos de luz y materiales a gusto

> **Referencia anterior:**
>
> **Ambiente**
> 
> <img width="550" alt="image" src="https://github.com/user-attachments/assets/124467cc-55e5-47a3-a8b7-9d09e5694614" />
>
> <img width="550" alt="image" src="https://github.com/user-attachments/assets/458eaa18-a831-4db0-9890-2290989c0395" />
>
> <img width="550" alt="image" src="https://github.com/user-attachments/assets/53d6903c-3e64-4122-acb9-4a320317775d" />
>
> <img width="550" alt="image" src="https://github.com/user-attachments/assets/0f9d118a-7d23-417b-983a-d7945ed78759" />
>
> **Luces**
> 
> <img width="550" alt="image" src="https://github.com/user-attachments/assets/d3013463-9164-499f-bd40-0dd6588d577f" />
>
> <img width="550" alt="image" src="https://github.com/user-attachments/assets/1a64eafc-e781-4d58-98f1-5601a6da8d1a" />
>
> **Material/General**
>
> <img width="550" alt="image" src="https://github.com/user-attachments/assets/97c8c7ea-fa69-4ccb-814b-21a639846b19" />




## 5. Actualizar credenciales en el proyecto (Cada prueba gratuita)
Ve a la carpeta del repositorio:
componentes/viewer
Abre el archivo de configuración del viewer y actualiza:
ticket
y
modelviewurl
## 6. Correr el proyecto en desarrollo (En caso de hacer cambios o correr pruebas)
npm run dev

El proyecto se abrirá en http://localhost:3000.
## 7. Subir cambios a Netlify (Cada prueba gratuita)
Agrega tus cambios al repositorio:
Abre GitHub

Ve al archivo de components/Viewer.tsx

Actualiza las credenciales anteriores

(Con commillas y sin espacios al final Ejemplo: "Tu_token_12345678")

Guarda el archivo con "Commit changes..."

> <img width="339" height="61" alt="image" src="https://github.com/user-attachments/assets/a803af5f-bb54-4c37-93d1-6f2b51c03315" />

