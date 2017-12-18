(function(){
   //variables
   var cajaPrincipal=document.querySelector("#contenedor");
   var caja1=document.querySelector(".caja1");
   var caja2=document.querySelector(".caja2");
   var caja3=document.querySelector(".caja3");

   //frente
   caja2.addEventListener("mouseenter", function(event) {
      cajaPrincipal.style["transform"]="perspective(550px) rotateX(0deg) rotateY(-90deg) translateY(80px)";
   });
   //derecha
   caja1.addEventListener("mouseout", function(event) {
      cajaPrincipal.style["transform"]="perspective(900px) rotateX(-30deg) rotateY(-20deg)";
   });
   //arriba
   caja3.addEventListener("mouseenter", function(event) {
      cajaPrincipal.style["transform"]="perspective(550px) rotateX(-90deg)  translateZ(80px)";
   });
   caja3.addEventListener("mouseout", function(event) {
      cajaPrincipal.style["transform"]="perspective(900px) rotateX(-30deg) rotateY(-20deg)";
   });
})();