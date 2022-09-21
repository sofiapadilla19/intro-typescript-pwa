//Clases

class Formula{
    x:number;
    a:number;
    b:number;
    c:number;
}

function cal1(form:Formula[]):number{
    let x3=0;
    let x2=0;
    let x1=0;


    form.forEach((nose)=>{
        x3=4*nose.a*nose.c;
    })

    form.forEach((nose2)=>{
        x2=Math.pow(nose2.b,2);
    })

    form.forEach((nose3)=>{
        x1=nose.x3-nose2.x2;
    })

    return (x3,x2);


}

// function cal2(form:Formula[]):number{
//     let x2=0;

//     form.forEach((nose2)=>{
//         x2=Math.pow(nose2.b,2);
//     })
//     return x2;
// }

function cal3(form:Formula[]):number{
    let x1=0;

    form.forEach((nose2)=>{
        x1=Math.sqrt(nose2.x2-x3);
    })
    return x2;
}



let resul=new Formula();
resul.a=1;
resul.b=2;
resul.c=3;

const [x2]=cal2(articulos2);
console.log(`X2 es: ${x2}`);
console.log(`X3 es: ${x3}`);


Math.sqrt(3)
Math.pow(3,2); //tres elevado al cuadrado