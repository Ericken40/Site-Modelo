const elementoDuvidas = document.querySelectorAll('.duvidas')
elementoDuvidas.forEach(function(duvidas){
    duvidas.addEventListener('click', function(){
        duvidas.classList.toggle('ativa')
    })
})