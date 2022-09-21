//Clases

class Persona{
    nombre:string;
    edad:number;

    imprimir():void{
        console.log(`El nombre es ${this.nombre} \n
        La edad es: ${this.edad}`); //para hacer referencia a la propiedad de la clase se usa this
    }
}

let persona1=new Persona();
persona1.nombre='Mario';
persona1.edad=22;
persona1.imprimir();

Math.sqrt(3)
Math.pow(3,2); //tres elevado al cuadrado