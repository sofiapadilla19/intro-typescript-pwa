//desestructuracion de funciones

//la palabra export es para exportarla y poder usarla desde otro archivo
export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'Sony Erickson',
    precio:1350
}

const tablet:Producto={
    desc:'iPad Air',
    precio:2500
}

function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total*0.16;
}

const articulos1=[telefono,tablet];
const iva1=calcularIVA(articulos1);

//console.log(`IVA: ${iva1}`);

//DESESTRUCTURAR FUNCION

export function calcularIVA2(productos:Producto[]):[number,number]{ //se ponen dos number en el corchete porque va a regresar dos numeros
    let total=0;
    productos.forEach(({precio})=>{
        total+=precio;
    })
    return[total,total*0.16] //estos son losdos numeros que va a regresar
}

const articulos2=[telefono,tablet];
const [total,iva]=calcularIVA2(articulos2);
console.log(`IVA: ${total}`);
console.log(`IVA: ${iva1}`);
