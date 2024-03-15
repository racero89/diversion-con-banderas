

document.addEventListener("div",function(){
    obtenerPaises();
})



function obtenerPaises() {}
    fetch('https://restcountries.com/v3/all')
    .then(response => response.json())
    .then (data => {
        const ordenarPaises = data.sort((a ,b) =>{
            if(a < b ) return -1;
            if(a > b) return 1;
            return 0 ;
         });
         console.log(ordenarPaises);
})



     