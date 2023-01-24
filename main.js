
//NOMBRE
var nombre = document.querySelector("#nom");
console.log(nombre);

nombre.addEventListener('mouseover', () => {

    nombre.style.color = '#04568d'
    nombre.style.setProperty("font-size", "46px"); 
    
   
});

nombre.addEventListener('mouseout', () => {

    nombre.style.color = 'black'
    nombre.style.setProperty("font-size", "45px"); 

});

//ICONOS

function pintar(n, r){
   if (r=='si'){
    document.getElementById(n).style.color = "#900C3F"
    document.getElementById(n).style.setProperty("font-size", "30px"); 
   }
   else{
    document.getElementById(n).style.color = "#0F0D0C"
    document.getElementById(n).style.setProperty("font-size", "25px"); 
   }
   
}





