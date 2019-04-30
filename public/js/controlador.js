
$("#btn-iniciar-sesion").click(function(){
    $.ajax({
        url:"/usuarios/comprobar-sesion",
        method:"GET",
        dataType:"json",
        success:function(res){
            if (res.comprobacion == 1){
                // console.log(res.mensaje);
                window.location.href = "/principal.html";
            } else{ 
                // console.log(res.mensaje);
                window.location.href = "/login.html";
            }
        },
        error:function(error){
            console.error(error);
        }
    });
});

$("#btn-login").click(function(){
    $.ajax({
        url:"/usuarios/login",
        method:"POST",
        data:$("#formulario-login").serialize(),
        dataType:"json",
        success:function(res){
            if (res.status == 1){
                window.location.href = "/principal.html";
            }
            else{ 
                console.log(res.mensaje)
            }
        },
        error:function(error){
            console.error(error);
        }
    });
});

$("#btn-registrarse").click(function(){
    window.location.href = "/registro.html";
});

$("#btn-registro").click(function(){
    var parametros = $("#formulario-registro").serialize();
    console.log("Información a guardar: " + parametros);
    $.ajax({
        url:"/usuarios/registro",
        method: "POST",
        data: $("#formulario-registro").serialize(),
        dataType: "json",
        success:function(res){
            console.log("Se ha registrado:");
            // if (res.status == 1)
            //     window.location.href = "/principal.html";
            // else 
            //     console.log(res.mensaje)
        },
        error:function(error){
            console.error(error);
        }
    });
});

