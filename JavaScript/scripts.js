
var caja1 = document.getElementById('box1');
var caja2 = document.getElementById('box2');


//event listener del primer boton
document.getElementById('boton1').addEventListener('click', function() {
    caja1.style.visibility = 'hidden'; 
    caja2.style.visibility = 'visible'; 
});

//event listener del segundo boton 
document.getElementById('boton2').addEventListener('click', function() {
    caja1.style.visibility = 'visible'; 
    caja2.style.visibility = 'hidden'; 
});

