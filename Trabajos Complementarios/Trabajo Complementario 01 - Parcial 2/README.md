# Instrucciones para la implementacion de la prática

1. Copie todo el directorio de mi proyecto que esta funsionando correctamente 
1. Dentro del directorio principal cree un archivo **.dockerignore** para que docker ignore el directorio **node_modules** ya que ese directorio se creara al momento de crear mi imagen de docker
1. Posterior a eso cree el archivo **Dockerfile** y lo empece a configurar como se detalla en los comentarios dentro del mismo archivo
1. Una vez el archivo **Dockerfile** está correctamente configurado procedi a crear mi imagen de docker con el comando **docker build -t trabajo-complementario-1-p2 .** 
    - **docker build**: es el comando que sirve para crear imagenes de docker a partir de opciones que van luego del comando o a partir de un archivo de configuración de docker *(Dockerfile)*
    - **-t**: sirve para darle una etiqueta a la imagen para su posterior administració, luego de este comando va el nombre que queramos darle a la imagen
    - y al final va la ubicación del archivo **Dockerfile** con las configuraciones para la creacion de la imagen, como este archivo está en el direcotorio principal basta con poner un punto *(.)*
1. Espere unos minutos hasta que termine la creación de la imagen, ya que primero se debe descargar la imagen base de **node**
1. y por último cree mi contenedor de docker con el comando **docker run --name tra-compl-1-p2 -dp 3000:3000 trabajo-complementario-1-p2**
    - **docker run**: es el comando para crear contenedores segun opciones que van luego del comando
    - **--name**: sirve para ponerle un nombre especifico al contenedor y que docker no le asigne un nombre random 
    - **-dp**: *d* sirve para que el contenedor se ejecute en segundo plano y *p* para declarar que puerto de nuestra maquina cliente servira de comunicacion con el puerto del contenedor
    - y al final se pone el nombre de la imagen con la queremos crear el docker
1. Y ya tendría funsionando correctamente mi aplicación desde un contenedor de docker.