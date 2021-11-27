

// (function(){

//     let formulary = document.querySelector('#formulary')
    
//     formulary.show()
    
//     $('#botonSubmit').on('submit', function(e){
//         e.preventDefault()
//         $('#formulary').hide();
            
//     });

   
// })();



const formulary = document.querySelector('.formulario')

//Botones submit
const botonSubmit = document.getElementById('botonSubmit');
const backSubmit = document.getElementById('backSubmit');
const back_2 = document.getElementById('backSubmit-2')
const nextStep = document.getElementById('next-step')
const lastStep = document.getElementById('lastStep')
//-------------------------------------------------------------\\


//----------Formularios-----------------------------------------------\\
const inputs = document.querySelectorAll('.formulario input');
const form1 = document.getElementById('formulary');
const form2 = document.getElementById('formulary-2');
const form3 = document.getElementById('formulary-3');
const tabla = document.getElementById('tabla');
const tituloDatos = document.getElementById('tituloDatos');

//-----------------------------------------------------------------------\\

form2.style.display = 'none';
form3.style.display = 'none';
tabla.style.display = 'none';


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
    social: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	repositorio: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	socialwork: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	adress: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	emergencyPhone: /^\d{7,14}$/, // 7 a 14 numeros.
	postalCode: /^\d{7,14}$/ // 7 a 14 numeros.


};

console.log(expresiones)


// lo que se intenta con este objeto es si todos los campos son validos o no
const campos = {
	
	nombre: false,
    email: false,
    phone: false,
    social: false,
    repositorio: false,
    socialwork: false,
    adress: false,
    emergencyPhone: false,
    postalCode: false

};



// Comprobacion de los input
const validarFormulario = (e) => {
    
   switch( e.target.name ){
        case 'nombre':
            validarCampo(expresiones.nombre, e.target, 'nombre')
            break;
    
         case 'email':
            validarCampo(expresiones.email, e.target, 'email')

             break;
         case 'phone':
            validarCampo(expresiones.phone, e.target, 'phone')

             break;
         case 'social':
            validarCampo(expresiones.social, e.target, 'social')

             break
         case 'repositorio':
            validarCampo(expresiones.repositorio, e.target, 'repositorio')

             break;
             

         case 'socialwork':
            validarCampo(expresiones.socialwork, e.target, 'socialwork')

             break;
         case 'adress':
            validarCampo(expresiones.adress, e.target, 'adress')

             break;
         case 'emergencyPhone':
            validarCampo(expresiones.emergencyPhone, e.target, 'emergencyPhone')

             break;
         case 'postalCode':
            validarCampo(expresiones.postalCode, e.target, 'postalCode')

             break;
    
}};


const validarCampo = (expresiones, input, campo) =>{
    if(expresiones.test(input.value)){

        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.getElementById(`grupo__${campo}`).classList.remove('error')
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        campos[campo] = true;// si los valores son correctos se cambia a true
    
    }else{
      document.getElementById(`grupo__${campo}`).classList.add('error')
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
      campos[campo] = false; // si no lo son se mantienen falsos
    }
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


//-------------Seccion de botones-----------\\
botonSubmit.addEventListener("click", function(e) {
    e.preventDefault();

    if ($('#inputNombre').val().length == 0 || $('#inputEmail').val().length == 0 || $('#inputPhone').val().length == 0) {
        mostrarError('Todos los campos son obligatorios')
        return false;
    }else{

        document.getElementById('registro1').innerHTML = inputNombre.value;
        document.getElementById('registro2').innerHTML = inputEmail.value;
        document.getElementById('registro3').innerHTML = inputPhone.value;

            form1.style.display = 'none';
            form2.style.display = 'block';
    }

   
  
    });

    
    backSubmit.addEventListener("click", function(e) {
        e.preventDefault();

        
        form2.style.display = 'none';
        form1.style.display = 'block';
  
   
  
        });

        nextStep.addEventListener("click", function(e) {
            e.preventDefault();

            if ($('#inputSocial').val().length == 0 || $('#inputGitHub').val().length == 0 || $('#inputLinkedin').val().length == 0) {
                alert('Faltan datos aun....')
                return false;
            }else{
                document.getElementById('social1').innerHTML = inputSocial.value;
                document.getElementById('social2').innerHTML = inputGitHub.value;
                document.getElementById('social3').innerHTML = inputLinkedin.value;
                form1.style.display = 'none';
                form2.style.display = 'none';
                form3.style.display = 'block';
            }


      
            });

            
            back_2.addEventListener('click', e => {
                e.preventDefault()
                
                form3.style.display = 'none';
                form2.style.display = 'block';
                
                
                
                
            })
            
            lastStep.addEventListener('click', (e) => {
                e.preventDefault()
                if ($('#inputAdress').val().length == 0 || $('#inputEmergency').val().length == 0 || $('#inputPostal').val().length == 0) {
                    alert('Faltan datos aun....')
                    return false;
                }else{
                    document.getElementById('informacion1').innerHTML = inputAdress.value;
                    document.getElementById('informacion2').innerHTML = inputEmergency.value;
                    document.getElementById('informacion3').innerHTML = inputPostal.value;
                    form3.style.display = 'none'
                    tabla.style.display = 'block'
                    tituloDatos.style.display = 'block'

                 


                };


            });

function mostrarError(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('casillaFaltante');

    formulary.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}