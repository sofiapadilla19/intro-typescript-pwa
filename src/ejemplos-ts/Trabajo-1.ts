
interface AlumnoUTL{
    nombre:string;
    edad:number;
    direccion:{
    calle:string;
    pais:string;
    estado:string;
    },
    mostrarDireccion:()=>void;
}


const alumnoUTL:AlumnoUTL={
    nombre:'Mario',
    edad:23,
    direccion:{
        calle:'veracruz',
        pais:'MX',
        estado:'GTO'
    },
    mostrarDireccion(){
        console.log(this.nombre+', ' +this.direccion.estado+ ', '+this.direccion.pais);
    }
}

const direccion=alumnoUTL.mostrarDireccion();
console.log(direccion)