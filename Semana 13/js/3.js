var nota_STD, suma, prom;
nomb_std = prompt("Ingrese nombre estudiante: ");
suma = 0;
prom = 0;
num = 1;

//proceso
while (num <= 3){
    nota_STD = parseFloat(prompt("ingrese nota [1 - 5]: "));
    suma += nota_STD;
    num++;
}
prom = suma/3;
if (prom>=3.0){
    document.write("estudiante "+ " "+nomb_std);
    document.write("<br>"+"<br>");
    document.write("nota final de programacion es"+" "+ prom.toFixed(2)+"<br>"+"<br>");
    document.write("felicitaciones !! -- aprueba materia programacion PAE");
}else{
    document.write("estudiante "+ " "+nomb_std);
    document.write("<br>"+"<br>");
    document.write("nota final de programacion es"+" "+ prom.toFixed(2)+"<br>"+"<br>");
    document.write("reprueba materia programacion PAE");
}
