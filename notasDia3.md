Acceder a un commit de tres maneras diferentes:

a. A través de su ID (1234567)
b. A través del nombre de la rama
  Sabiendo que por defecto la rama está en el último commit
c. A través del puntero HEAD


Checkout 

Posicionar HEAD en un commit
git checkout <id-commit al que quiero ir>
  - Posicionarme en un commit concreto en el pasado
  - Cambiar de rama

Cambiar historico en el pasado
a. Posicionarme en el commit que quiero modificar
git checkout <id> / master^^

b. Crear una nueva rama
git checkout -b nombreRama

c. Trabajar en los cambios sobre mi working director
d. add / commit

e. Volver al presente 
git checkout master
git checkout <nombreRama>





