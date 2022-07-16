//  window.sr = ScrollReveal();

//      sr.reveal('.negro', {
//        duration: 3000

//     });
  

//     sr.reveal('.img-dis',{
//         duration: 2000,
//         origin: 'right',
//         distance: '-100px'
//     });

//     sr.reveal('.img-jorge',{
//         duration: 2000,
//         origin: 'bottom',
//         distance: '-100px'
//     });


/*-------------------------------------------------------Intersection observer----------------------------------------*/




const imagen1 = document.getElementById('img-dis1');
const color1 = document.getElementById('negro1');

const cargarImagen = (entradas, observador) =>{
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
           entrada.target.classList.add('visible');
        } else{
            // entrada.target.classList.remove('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImagen,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: .3
});

observador.observe(imagen1);
observador.observe(color1);

// const color1 = document.getElementById('color1');

// const cargarColor = (entradas, observador)=>{
//     entradas.forEach((entrada)=>{
//         if(entrada.isIntersecting){
//             entrada.target.classList.add('color-negro');
//         }else{

//         }
//     })
// }

// const observador2 = new IntersectionObserver(cargarColor,{
//     root: null,
//     rootMargin: '0px',
//     threshold: 1.0
// })
    
// observador2.observe(color1);