const ejercicio1 = [56,8,45,12,10,3,77,100,96,36,5,22,20,31,47,2,50,61

];

const nPrimo = numero =>
{
 for (let i = 2; i < numero; i++){
   if(numero % i == 0)
   return false;

 }
return true;
}
ejercicio1.forEach(numero =>{
if(nPrimo(numero))
{
console.log(`Este numero es primo ${numero}`);
}
})






/*const persona1 = {
    nombre:"Quico",
    apellido:"Hernandez",
    edad: 34,
    
    };
    
    const persona2 = {
    nombre:"Caracol",
    apellido:"caracolito",
    edad:8,
    
    };
    
    const ejercicio2 = (persona) => {
      if(persona.edad >= 18){
          console.log(`Puedes pasar familiar ${persona.nombre} ${persona.apellido}`);
    } else
     {console.log(  `No puedes pasar ${persona.nombre} ${persona.apellido}`);
     }
    };
    
    
    ejercicio2(persona1);
    ejercicio2(persona2);
    */
 
    function generateFibbonacci(limit){
        const fib = [0,1,];


    
     
      for( let i = 2; i < limit; i++){
        fib[i] = fib [i - 1] + fib[i - 2];

      }
             
        return fib  ;

      



     }
     const fibiSeries = generateFibbonacci(100);
      const ul = document.getElementById("fib");
     
 fibiSeries.forEach(number => {
     const li = document.createElement("li");
      li.innerHTML = number;
       ul.append(li);

 });
 
 
 
 
 
