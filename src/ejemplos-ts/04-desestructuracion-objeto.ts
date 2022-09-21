//desestructuracion de Objeto y Arrays

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    year:number;
}

const reproductor:Reproductor={
    volumen:90,
    segundo:66,
    cancion:"Mañanitas",
    detalles:{
        autor:'cepillin',
        year:1978,
    }
}


//esta es una forma de llamar los objetos
// console.log(`El volumen actual es: ${reproductor.volumen}`); //para imprimir en la consola
// console.log(`El segundo actual es: ${reproductor.segundo}`);
// console.log(`La canción actual es: ${reproductor.cancion}`);
// console.log(`La canción actual es: ${reproductor.detalles.autor}`);

///DESESTRUCTURA!!!!

const{volumen,segundo,cancion,detalles}=reproductor; //primero la propiedad que queremos desestructurar
const{autor}=detalles; //primero la propiedad que queremos desestructurar
console.log(`El volumen actual es: ${volumen}`); //para imprimir en la consola
console.log(`El segundo actual es: ${segundo}`);
console.log(`La canción actual es: ${cancion}`);
console.log(`La canción actual es: ${autor}`);


//ESTA ES UNA FORMA DE LLAMAR LOS ARREGLOS
const dbz:string[]=['Goku','Vegeta','Trunks','Yamcha'];
// console.log(`Personaje 1: ${dbz[0]}`);
// console.log(`Personaje 2: ${dbz[1]}`);
// console.log(`Personaje 3: ${dbz[2]}`);
// console.log(`Personaje 4: ${dbz[3]}`);

//DESESTRUCTURAR ARREGLOS
const[a,b,c,d]=dbz;
console.log(`Personaje 1: ${a}`);
console.log(`Personaje 2: ${b}`);
console.log(`Personaje 3: ${c}`);
console.log(`Personaje 4: ${d}`);


