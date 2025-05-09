const questionBtn = document.querySelectorAll('.question-btn');/* Devuelve una NodeList que contiene todos los botones */
const questionText = document.querySelector('.question-text');
const questions = document.querySelectorAll('.question')

questionBtn.forEach((btn) => {//Recorro todos los botones
    btn.addEventListener('click',(e)=>{//Todos los botones estan escuchando
        const question = btn.closest('.question');//Accedemos al padre (contenedor) de dicho boton que contiene el texto
        const text = question.querySelector('.question-text');//estando en el padre accedemos al texto
        const plusIcon = question.querySelector('.plus-icon');
        const minusIcon = question.querySelector('.minus-icon');

        questions.forEach((item) => {
            if(item !== question){
                item.querySelector('.question-text').classList.remove('show-text-icon');
                item.querySelector('.plus-icon').classList.remove('hide-icon');
                item.querySelector('.minus-icon').classList.remove('show-text-icon');
            }
        })

        text.classList.toggle('show-text-icon')//Intercambiamos la clase para mostrar u ocultar
        plusIcon.classList.toggle('hide-icon') // alterno mostrando u ocultando el icono
        minusIcon.classList.toggle('show-text-icon') // alterno mostrando u ocultando el icono
    });
});