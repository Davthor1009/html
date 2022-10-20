let inicio, final, num=0;
inicio = parseInt(prompt("numero inicial rango"));
final = parseInt(prompt("numero final rango"));
for(f=inicio; f <= final; f++){
    if (f % 2 == 0){
        document.write("numero par.. "+f+"<br>");
        num++;
    }
}

document.write("cantidad de numeros pares generados.."+num+"<br>");
