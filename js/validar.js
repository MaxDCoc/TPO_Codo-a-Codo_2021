const nombre = document.getElementById('nombre_text')
const apellido = document.getElementById('apellido_text')
const prov = document.getElementById('provincia_text')
const ciudad = document.getElementById('ciudad_text')
const tel = document.getElementById('telefono_number')
const email = document.getElementById('email_contacto')
const subj = document.getElementById('asunto_text')
const msg = document.getElementById('mensaje_text')
const form = document.getElementById('containerForm')
var error = false;

nombre.addEventListener('keypress',(eventonombre)=>{
    eventonombre.preventDefault()
    let codigoKey = eventonombre.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    console.log(valorKey)

    let valor = parseInt(valorKey)
    console.log(valor)

    if(!parseInt(valorKey) && valorKey!=0){
        nombre.value += valorKey
    }
})

apellido.addEventListener('keypress',(eventoapellido)=>{
    eventoapellido.preventDefault()
    let codigoKey = eventoapellido.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    console.log(valorKey)

    let valor = parseInt(valorKey)
    console.log(valor)

    if(!parseInt(valorKey) && valorKey!=0){
        apellido.value += valorKey
    }
})

tel.addEventListener('keypress',(eventotel)=>{
    eventotel.preventDefault()
    let codigoKey = eventotel.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    console.log(valorKey)

    if(valorKey == 0){
        tel.value += valorKey
    }

    let valor = parseInt(valorKey)
    console.log(valor)

    if(valor){
        tel.value += valor
    }
})

form.addEventListener('submit', (e)=>{

    if(nombre.value === '' || nombre.value == null || nombre.value.length <=1 ){
        alert("El nombre ingresado debe tener mas de una letra")
        error = true;
    }

    if(apellido.value === '' || apellido.value == null || apellido.value.length <=1 ){
        alert("El apellido ingresado debe tener mas de una letra")
        error = true;
    }

    if(prov.value === '' || prov.value == null || prov.value.length <=1 ){
        alert("La provincia ingresada debe tener mas de una letra")
        error = true;
    }

    if(ciudad.value === '' || ciudad.value == null || ciudad.value.length <=1 ){
        alert("La ciudad ingresada debe tener mas de una letra")
        error = true;
    }

    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    if(!regexEmail.test(email.value)){
        alert("El email ingresado no es valido")
    }

    if(tel.value[0] === '' || tel.value == null || tel.value.length <=1 ){
        alert("El telefono ingresado debe tener mas de un numero")
        error = true;
    }

    if(subj.value === '' || subj.value == null || subj.value.length <=1 ){
        alert("El asunto ingresado debe tener mas de una letra")
        error = true;
    }

    if(msg.value === '' || msg.value == null || msg.value.length <=1 ){
        alert("El mensaje ingresado debe tener mas de una letra")
        error = true;
    }

    if(error==true) e.preventDefault()
})