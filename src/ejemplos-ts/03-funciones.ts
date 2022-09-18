

//------------------------- FUNCIONES
// con void la funcion no regresara nada

function sumar(a,b):void{
    console.log(a+b)
}

const resultado=sumar('Sofia ','Padilla');
console.log(resultado)

function sumar2(n1:number, n2:number):number{
    return n1+n2;
}
console.log(sumar2(6,3))

function multiplicar(n1:number,otronumero:number,base:number=0):number{
    //al poner ? el dato se vuelve opcional
    let tem=n1*base;
    
    return tem;
}

console.log(multiplicar(5,7))


interface Mascota{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota,x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:Mascota={
    nombre:'Miau',
    edad:2,
    mostrarEdad() {
        console.log('La edad es ',this.edad);
    },
}
calcular(nuevaMascota,3);

