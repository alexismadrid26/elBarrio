function irPrincipal() {
    $.ajax({
        url: "/principal",
        method: "GET",
        dataType: "json",
        success: function (res) {
            console.log(res);
        document.getElementById("nav-usuario-perfil").innerHTML = `<button class="d-inline btn btn-sm btn-light" id="btn-foto-perfil" name="foto-perfil"
                type="button" onclick="mostrarPerfil();"><img src="img/sin-foto.jpg" alt="img-31" class="rounded-circle" height="28"
                    width="28">
                <p class="d-inline text-secondary"><strong>${res.nombre} ${res.apellido}</strong></p>
            </button>`;
        },
        error: function (error) {
            console.log(error);
        }
    });
}






function mostrarDashboard() {
    document.getElementById("id-Dashboard").style.display = "block";
    document.getElementById("id-Tiendas").style.display = "none";
    document.getElementById("id-Planes").style.display = "none";
    document.getElementById("id-Amigos").style.display = "none";
    document.getElementById("id-Perfil").style.display = "none";

    document.getElementById("buscar-resultado").style.display = "none";
}
function mostrarTiendas() {
    document.getElementById("id-Dashboard").style.display = "none";
    document.getElementById("id-Tiendas").style.display = "block";
    document.getElementById("id-Planes").style.display = "none";
    document.getElementById("id-Amigos").style.display = "none";
    document.getElementById("id-Perfil").style.display = "none";

    document.getElementById("buscar-resultado").style.display = "none";
}
function mostrarPlanes(){
    document.getElementById("id-Dashboard").style.display = "none";
    document.getElementById("id-Tiendas").style.display = "none";
    document.getElementById("id-Planes").style.display = "block";
    document.getElementById("id-Amigos").style.display = "none";
    document.getElementById("id-Perfil").style.display = "none";

    document.getElementById("buscar-resultado").style.display = "none";
}
function mostrarAmigos() {
    document.getElementById("id-Dashboard").style.display = "none";
    document.getElementById("id-Tiendas").style.display = "none";
    document.getElementById("id-Planes").style.display = "none";
    document.getElementById("id-Amigos").style.display = "block";
    document.getElementById("id-Perfil").style.display = "none";

    document.getElementById("buscar-resultado").style.display = "none";
}
$( "#btn-buscar" ).click(function() {
    if($( "#text-buscar-contenido").val() != ''){
        document.getElementById("buscar-resultado").style.display = "block";
    } else {
        document.getElementById("buscar-resultado").style.display = "none";
    }
  });



//
function mostrarPerfil(){
    document.getElementById("id-Dashboard").style.display = "none";
    document.getElementById("id-Tiendas").style.display = "none";
    document.getElementById("id-Planes").style.display = "none";
    document.getElementById("id-Amigos").style.display = "none";
    document.getElementById("id-Perfil").style.display = "block";

    document.getElementById("buscar-resultado").style.display = "none";
    htmlM = "";
    htmlM += "<div class='container'>" +
        "<div class='row jumbotron'>" +
        "<div class='col-md-3'>" +
        "</div>" +
        "<div class='col-md-4'>" +
        "<div class='card text-center' style='width:400px'>" +
        "<img class='rounded-circle mx-auto d-block' src='img/sin-foto.jpg' alt='Card image'>" + "</img>" +
        "<div class='card-body'>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-4'>" +
        "</div>" +
        "</div>" +
        "<div class='row jumbotron'>" +
        "<div class='col-md-2'>" +
        "</div>" +
        "<div class='col-md-8'>" +
        "<div class='row'>" +
        "<div class='col-md-10'>" +
        "<div class='shadow-lg p-1 mb-5 bg-white rounded input-group'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroupPrepend1'><strong>Nombre</strong></span>" +
        "</div>" +
        "<input aria-describedby='inputGroupPrepend1' class='form-control' id='nombreActualizar' name='nombreActualizar' value='Admin' disabled='disabled' type='text'></input>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div id='mensaje_nombreActualizar' style='display: none'>" +
        "<p class='text-danger'>" +
        "<abbr title='Solo letras!'><i class='fas fa-asterisk fa-xs'></i></abbr>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-md-10'>" +
        "<div class='shadow-lg p-1 mb-5 bg-white rounded input-group'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroupPrepend2'><strong>Apellido</strong></span>" +
        "</div>" +
        "<input aria-describedby='inputGroupPrepend2' class='form-control' id='apellidoActualizar' name='apellidoActualizar' value='Admin' disabled='disabled' type='text'></input>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div id='mensaje_apellidoActualizar' style='display: none'>" +
        "<p class='text-danger'>" +
        "<abbr title='Solo letras!'><i class='fas fa-asterisk fa-xs'></i></abbr>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-md-10'>" +
        "<div class='shadow-lg p-1 mb-5 bg-white rounded input-group'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroupPrepend3'><strong>Rol</strong></span>" +
        "</div>" +
        "<input aria-describedby='inputGroupPrepend3' class='form-control' id='rolActualizar' name='rolActualizar' value='Admin' type='text' style='display: block'></input>" +
        "<select aria-describedby='inputGroupPrepend3' class='form-control' id='rolActualizarSelect' name='rolActualizarSelect' style='display: none'>" +
        "<option value='0'>" +
        "Seleccione un Rol" +
        "</option>" +
        "<option value='1'>" +
        "Jefe" +
        "</option>" +
        "<option value='2'>" +
        "Secretaria" +
        "</option>" +
        "<option value='3'>" +
        "Administrador" +
        "</option>" +
        "<option value='4'>" +
        "El&eacutectrico" +
        "</option>" +
        "<option value='5'>" +
        "Mec&aacutenico" +
        "</option>" +
        "</select>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div id='mensaje_rolActualizar' style='display: none'>" +
        "<p class='text-danger'>" +
        "<abbr title='Debe seleccionar una opci&oacuten'><i class='fas fa-asterisk fa-xs'></i></abbr>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-md-10'>" +
        "<div class='shadow-lg p-1 mb-5 bg-white rounded input-group'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroupPrepend4'><strong>Usuario</strong></span>" +
        "</div>" +
        "<input aria-describedby='inputGroupPrepend4' class='form-control' id='usuarioActualizar' name='usuarioActualizar' value='Admin.Admin' disabled='true'  type='text'></input>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div id='mensaje_usuarioActualizar' style='display: none'>" +
        "<p class='text-danger'>" +
        "<abbr title=''><i class='fas fa-asterisk fa-xs'></i></abbr>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-md-10'>" +
        "<div class='shadow-lg p-1 mb-5 bg-white rounded input-group'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroupPrepend5'><strong>Contrase&ntildea</strong></span>" +
        "</div>" +
        "<input aria-describedby='inputGroupPrepend5' class='form-control' id='contraseniaUnoActualizar' name='contraseniaUnoActualizar' placeholder='Nueva Contrase&ntildea' value='asd.123' disabled='true' type='password'></input>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div id='icono_contraseniaMostrar' style='display: block'>" +
        "<abbr title='Mostrar Contraseña'><i class='fas fa-eye-slash fa-lg'></i></abbr>" +
        "</div>" +
        "<div id='mensaje_contraseniaUnoActualizar' style='display: none'>" +
        "<p class='text-danger'>" +
        "<abbr title=''><i class='fas fa-asterisk fa-xs'></i></abbr>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-md-10' id='DIV_contraseniaDosActualizar' style='display: none'>" +
        "<div class='shadow-lg p-1 mb-5 bg-white rounded input-group'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroupPrepend6'><strong>Repetir Contrase&ntildea</strong></span>" +
        "</div>" +
        "<input aria-describedby='inputGroupPrepend6' class='form-control' id='contraseniaDosActualizar' name='contraseniaDosActualizar' placeholder='Confirme contrase&ntildea' value='asd.123' type='password'></input>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div id='mensaje_contraseniaDosActualizar' style='display: none'>" +
        "<p class='text-danger'>" +
        "<abbr title=''><i class='fas fa-asterisk fa-xs'></i></abbr>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-md-10'>" +
        "<div class='shadow-lg p-1 mb-5 bg-white rounded input-group'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroupPrepend7'><strong>Correo</strong></span>" +
        "</div>" +
        "<input aria-describedby='inputGroupPrepend7' class='form-control' id='correoActualizar' name='correoActualizar' value='admin@gmail.com' disabled='true' type='text'></input>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div id='mensaje_correoActualizar' style='display: none'>" +
        "<p class='text-danger'>" +
        "<abbr title=''><i class='fas fa-asterisk fa-xs'></i></abbr>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-md-10'>" +
        "<div class='shadow-lg p-1 mb-5 bg-white rounded input-group'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroupPrepend8'><strong>Tel&eacutefono</strong></span>" +
        "</div>" +
        "<input aria-describedby='inputGroupPrepend8' class='form-control' id='telefonoActualizar' name='telefonoActualizar' maxlength='8' value='+504 9867-3221' disabled='true' type='text'></input>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div id='mensaje_telefonoActualizar' style='display: none'>" +
        "<p class='text-danger'>" +
        "<abbr title='Solo n&uacutemeros!'><i class='fas fa-asterisk fa-xs'></i></abbr>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-md-10'>" +
        "<div class='shadow-lg p-1 mb-5 bg-white rounded input-group'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroupPrepend9'><strong>Identidad</strong></span>" +
        "</div>" +
        "<input aria-describedby='inputGroupPrepend9' class='form-control' id='identidadActualizar' name='identidadActualizar' maxlength='13' value='0909-1999-000000' disabled='true' type='text'></input>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div id='mensaje_identidadActualizar' style='display: none'>" +
        "<p class='text-danger'>" +
        "<abbr title='Solo n&uacutemeros!'><i class='fas fa-asterisk fa-xs'></i></abbr>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-md-10'>" +
        "<div class='shadow-lg p-1 mb-5 bg-white rounded input-group'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroupPrepend10'><strong>G&eacutenero</strong></span>" +
        "</div>" +
        "<input aria-describedby='inputGroupPrepend10' class='form-control' id='generoActualizar' name='generoActualizar' value='Masculino' disabled='true' type='text' style='display: block'></input>" +
        "<select aria-describedby='inputGroupPrepend10' class='form-control' id='generoActualizarSelect' name='generoActualizarSelect' style='display: none'>" +
        "<option value='0'>" +
        "G&eacutenero" +
        "</option>" +
        "<option' value='1'>" +
        "Masculino" +
        "</option>" +
        "<option' value='2'>" +
        "Femenino" +
        "</option>" +
        "</select>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div id='mensaje_generoActualizar' style='display: none'>" +
        "<p class='text-danger'>" +
        "<abbr title='Debe seleccionar una opci&oacuten'><i class='fas fa-asterisk fa-xs'></i></abbr>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<div class='col-md-10'>" +
        "<div class='shadow-lg p-1 mb-5 bg-white rounded input-group'>" +
        "<div class='input-group-prepend'>" +
        "<span class='input-group-text' id='inputGroupPrepend11'><strong>Fecha Nacimiento</strong></span>" +
        "</div>" +
        "<input aria-describedby='inputGroupPrepend11' class='form-control' id='fechaNacimientoActualizar' name='fechaNacimientoActualizar' value='01/01/1998' disabled='true' type='text' style='display: block'></input>" +
        "<input aria-describedby='inputGroupPrepend11' class='form-control' id='fechaNacimientoActualizarSelect' min='1950-01-01' max='2015-12-31' name='fechaNacimientoActualizarSelect' type='date' style='display: none'></input>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-1'>" +
        "<div id='mensaje_fechaNacimientoActualizar' style='display: none'>" +
        "<p class='text-danger'>" +
        "<abbr title='Seleccione una fecha entre 1950 a 2015'><i class='fas fa-asterisk fa-xs'></i></abbr>" +
        "</p>" +
        "</div>" +
        "</div>" +
        "</div>" +
        "<div class='row'>" +
        "<button class='offset-md-1 col-md-4 btn btn-secondary' id='CancelarActualizarDatosEmpleado'  style='display: none' type='button'>" +
        "<i class='fas fa-times-circle'></i> Cancelar" +
        "</button>" +
        "<button class='offset-md-1 col-md-4 btn btn-success' disabled='false' id='ActualizarDatosEmpleado' style='display: none' type='button'>" +
        "<i class='fas fa-check-circle'></i> Actualizar" +
        "</button>" +
        "</div>" +
        "</div>" +
        "<div class='col-md-2'>" +
        "<button class='btn btn-secondary' id='btn_Editando' type='button'>" +
        "<i class='fas fa-cogs' id='icono_Editando'></i> Editar" +
        "</button>" +
        "</div>" +
        "</div>" +
        "</div>";
    $("#id-Perfil").html( htmlM );
}

$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});