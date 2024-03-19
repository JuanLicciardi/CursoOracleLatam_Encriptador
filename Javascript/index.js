console.log('Esta conectado a Index.js !!!')
console.log('Vamos a dar funcionalidad a nuestra pagina')

// ---------------------   Declaración de variables ---------------------------------

// ----- Variables con valores de los TextArea
const txtEncriptar = document.querySelector('.enc_textArea')
const txtDesencriptar = document.querySelector('.des_textArea')

// ----- Variables secciones Encriptar, Mensaje, Desencriptar
const messageSection = document.querySelector('.message')
const desencriptarSection = document.querySelector('.desencriptar')
const messageArticle = document.querySelector('.message_article')

// ----- Variables Botones Encriptar, Desencriptar, Copiar
const btnEncriptar = document.querySelector('.btn_encriptar') 
const btnDesencriptar = document.querySelector('.btn_desencriptar') 
const btnCopiar = document.querySelector('.btn_copiar')





window.addEventListener('load',()=>{
    anularBotonDesencriptar()
    if (outerWidth<768){
        console.log('este es un celular');
        ocultarSection()
        txtEncriptar.addEventListener("focus",handler_txtEncripFocus)
        txtEncriptar.addEventListener("blur",handler_txtEncripBlur)        
        btnEncriptar.addEventListener("click",handler_btnEncriptar)
        btnCopiar.addEventListener("click",handler_btnCopiar)
        btnDesencriptar.addEventListener("click",handler_btnDesencriptar)
    }
    
        

    if (outerWidth<1024 && outerWidth>=768){
        console.log('este es un tablet');
        ocultarSection()
        txtEncriptar.addEventListener("focus",handler_txtEncripFocus)
        txtEncriptar.addEventListener("blur",handler_txtEncripBlur)        
        btnEncriptar.addEventListener("click",handler_btnEncriptar)
        btnCopiar.addEventListener("click",handler_btnCopiar)
        btnDesencriptar.addEventListener("click",handler_btnDesencriptar)

        }

    if (outerWidth>=1024){
        console.log('este es un laptop');
        txtEncriptar.addEventListener("focus",handler_txtEncripFocus)
        txtEncriptar.addEventListener("blur",handler_txtEncripBlur) 
        btnEncriptar.addEventListener("click",handler_btnEncriptar_laptop)
        btnCopiar.addEventListener("click",handler_btnCopiar)
        btnDesencriptar.addEventListener("click",handler_btnDesencriptar)

        }


    })






// -------------------- FUNCIONES PARA MANIPULAR EVENTOS (Handler) ----------------------------
const handler_txtEncripFocus = ()=>{
        txtEncriptar.placeholder = ""
        ocultarSection()

}

const handler_txtEncripBlur = ()=>{
        if(txtEncriptar.value == ""){
            txtEncriptar.placeholder = "Ingrese el texto aqui"
            txtDesencriptar.value = capturarTexto()
            anularBotonDesencriptar()
            desencriptarSection.style.display = 'none'
            messageSection.style.display = 'flex'
            messageArticle.style.display = 'none'
        }
}

const handler_btnEncriptar = () =>{
    console.log(capturarTexto())
        if(capturarTexto() == ""){
            txtEncriptar.placeholder = "Ingrese el texto aqui"
            messageSection.classList.remove('ocultar')
            anularBotonDesencriptar()
        }else{
            txtDesencriptar.value = encriptarMessage(capturarTexto())
            messageSection.classList.add('ocultar')
            desencriptarSection.style.display = 'flex' 
            anularBotonDesencriptar()
        }
    }

const handler_btnDesencriptar = ()=>{
    console.log('contenido Text Area: ',capturarTexto())
    txtDesencriptar.value = dencriptarMessage(capturarTexto())
    console.log('contenido Text Area: ',txtDesencriptar.value)
    //messageSection.style.display = "flex"
    desencriptarSection.style.display = 'flex' 
    console.log('podes desencriptar')
}

const handler_btnCopiar = ()=>{
    console.log('%c Estoy copiando',('color:red'))
    const copiado = txtDesencriptar.value
    navigator.clipboard.writeText(copiado)
    desencriptarSection.style.display = 'flex' 
    activarBotonDesencriptar()

}


const handler_btnEncriptar_laptop = () =>{
    console.log(capturarTexto())
        console.log('llegamos');
        console.log('captex : ', capturarTexto())
        if(capturarTexto() == ""){
            txtEncriptar.placeholder = "Ingrese el texto aqui"
            messageArticle.style.display = 'flex'
            anularBotonDesencriptar()
        }else{
            txtDesencriptar.value = encriptarMessage(capturarTexto())
            messageSection.classList.add('ocultar')
            messageSection.style.display = 'none'
            desencriptarSection.style.display = 'flex' 
            anularBotonDesencriptar()
        }
    }





// -------------------------------- Acciones en el DOM ------------------------------

const ocultarSection = ()=>{
    console.log('paso por ocultar')
    messageSection.classList.add('ocultar')
    desencriptarSection.classList.add('ocultar')
}


const capturarTexto = ()=>{
        return txtEncriptar.value.toLowerCase()
    }
    

function anularBotonDesencriptar(){
        if(txtDesencriptar.value == '') {
            btnDesencriptar.disabled = true
            btnDesencriptar.style.opacity = .5
        }
    }

function activarBotonDesencriptar(){
            btnDesencriptar.disabled = false
            btnDesencriptar.style.opacity = 1
}

const encriptarMessage = (texto)=>{
    textoEncriptado = ''
    for (let index = 0; index < texto.length; index++) {
        switch (texto[index]) {
            case 'a':
                textoEncriptado += 'ai'
                break;
            case 'e':
                textoEncriptado += 'enter'
                break;
            case 'i':
                textoEncriptado += 'imes'
                break;
            case 'o':
                textoEncriptado += 'ober'
                break;
            case 'u':
                textoEncriptado += 'ufat'
                break;
                                    
            default:
                textoEncriptado += texto[index]
                break;
        }
        
    }
    return textoEncriptado
}

const dencriptarMessage = (texto)=>{
    textoDesencriptado = ''
    for (let index = 0; index < texto.length; index++) {
        switch (texto[index]) {
            case 'a':
                textoDesencriptado += 'a'
                index+=1
                break;
            case 'e':
                textoDesencriptado += 'e'
                index+=4
                break;
            case 'i':
                textoDesencriptado += 'i'
                index+=3
                break;
            case 'o':
                textoDesencriptado += 'o'
                index+=3
                break;
            case 'u':
                textoDesencriptado += 'u'
                index+=3
                break;
                                    
            default:
                textoDesencriptado += texto[index]
                break;
        }
        
    }
    return textoDesencriptado
}

