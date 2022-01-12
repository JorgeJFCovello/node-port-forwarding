# node-port-forwarding

Para crear un ejecutable basta con ingresar en el root del repositorio y correr el comando 'pkg index.js' y crea los ejecutables en linux, macOS y windows

La aplicacion se basa en tomar ciertos valores para conectarse por SSH (IP y puerto). Despues se conecta de manera remota desde el ssh a otra ip y puerto (REMOTE IP y REMOTE PORT) y finalmente pide una ip y puerto para ejecutar y escuchar pedidos (deberian ser de tu maquina local)

Tambien te pide la ruta de donde este tu ppk o tu usuario y password.