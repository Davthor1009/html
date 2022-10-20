var datof, sw=0, clave=123;

for(f=1; f<=3; f++){
    datof=parseInt(prompt("ingrese contraseña de ingreso"));
    if (datof==clave){
        swal("USUARIO","ACCESO PERMITIDO","success");
        document.write("ACCESS GRANTED");
        sw=1;
        break;
    }
    if (sw==0){
        swal("USUARIO","ACCESO BLOQUEADO","error");
    }
}