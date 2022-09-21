//Clases

class Formula{
    x:number;
    a:number;
    b:number;
    c:number;
    x1:number;
    x2:number;
    x3:number;
    x4:number;
    x5:number;
    x6:number;

    imprimir():void{
        this.x3=4*this.a*this.c;
        this.x2=Math.pow(this.b,2);
        this.x1=this.x3-this.x2;
        this.x4=Math.sqrt(this.x1);
        this.x5=(-(this.b)+(this.x4));
        this.x5=this.x5/(2*this.a);

        this.x6=(-(this.b)-(this.x4));
        this.x6=this.x6/(2*this.a);

        console.log(`El resultado de x1 es ${this.x5}`)
        console.log(`El resultado de x2 es ${this.x6}`)
    }
}

let resul=new Formula();
resul.a=1;
resul.b=2;
resul.c=3;
resul.imprimir();

// function cal2(form:Formula[]):number{
//     let x2=0;

//     form.forEach((nose2)=>{
//         x2=Math.pow(nose2.b,2);
//     })
//     return x2;
// }
