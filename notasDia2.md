== Formas de crear un remoto
1. Repositorio remoto --> Clonarlo a Local
git clone <url>

2. Proyecto git en local --> subirlo a github
a. Usuario en Github
b. Crear el repositorio local (proyectoParaGithub)
c. Crear el repositorio en Github
  http://github.com/ialcazar/proyectoParaGithub
d. Añadir el repositorio remoto dentro de mi repositorio local
  git remote add origin <url>
  git remote -v: Listar todos los repos remotos dados de alta en mi local
e. git push origin master


3. Crear el repo en github --> local
a. Crear el proyecto en Github: con README y .gitignore
b. git clone <url> --> el alias del remoto se llama 'origin'
c. git push origin master


== Comandos con Remoto 

git push: Enviar cambios
git pull: Traer cambios y fusionarlos con los locales
git fetch: Traer cambios

git clone: clonación

NO PODEIS HACER NINGUNA OPERACIÓN MAS CONTRA UN REMOTO