$(document).ready(function(){
('#form').validate({
    //reglas que debe cumplir el formulario
rules:{
    name:{required:true,
    minlength:4
    ,
},
surname:{required:true,
    minlength:10,
},
email:{required:true,
    minlength:4,
},
phone:{required:true,
    number:true,
    maxlength:8,
    minlength:8,
}
},
//mensajes que aparecen
messages:{
    name:{
    required:"El nombre es requerido",
    minlength:"Minimo de 4 letras"
    },
    surname:{
        required:"El apellido es requerido",
        minlength:"Minimo de 4 letras"

    },

    email:{
        required:"El email es requerido",
        email:"El correo no es valido"


    },
    phone:{
        required:"El telefono es requerido",
        number:"Solo se aceptan numeros",
        minlength:"Minimo de 8 caracteres",
        maxlength:"Maximo de 11 caracteres"


    }
}
})


});