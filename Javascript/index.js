console.log('Esta conectado a Index.js!!!')
window.addEventListener('load',()=>{
    if (outerWidth<768){
        console.log('este es un movil');

    }

    if (outerWidth<1024 && outerWidth>=768){
        console.log('este es una tablet');
    }

    if (outerWidth>=1024){
    console.log('este es un laptop');
    }





})