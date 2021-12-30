# Instrucciones para la implementacion de la prática

1. Dentro del directorio principal cree un archivo **docker-compose.yml** y lo empece a configurar como se detalla en los comentarios dentro del mismo archivo
1. Una vez el archivo **docker-compose.yml** está correctamente configurado procedi a ejecutar el comando **docker-compose up --build**
   - **up**: es el comando que sirve para levantar todos los servicios inmediatamente luego de haber sido creadas
   - **--build**: sirve para construir todos los servicios declarados dentro del archivo **docker-compose.yml**
1. Espere unos minutos hasta que termine la creación de todas los servicios, ya que primero se debe descargar la imagen base de **mongo** y posterior crear los contenedores
1. Y por último ya tendría mi servicio rest trabajando con una base de datos mongo privada y unica.
