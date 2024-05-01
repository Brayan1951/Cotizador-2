export class Cliente {
    constructor(codigo, ruc, razon_social, email, telefono, direccion,linea_credito) {
            this.codigo = codigo,
            this.ruc = ruc,
            this.razon_social = razon_social,
            this.linea_credito = linea_credito,
            this.email = email,
            this.telefono = telefono,
            this.direccion = direccion;
    }


}



export class Clientes {
    constructor(){
        this.clientes=[]
    }

    agregar(cliente){
        this.clientes.push(cliente)    
    }
}