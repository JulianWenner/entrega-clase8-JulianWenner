const productos= [
    {codigo:1,tipo:"gpu",maca:"MSI",Modelo:"GTX3060",Precio:120000},
    {codigo:2,tipo:"monitor",maca:"MSI",Modelo:"27 pulgadas 2ms",Precio:80000},
    {codigo:3,tipo:"gpu",maca:"ASUS",Modelo:"GTX3080",Precio:250000},
    {codigo:4,tipo:"monitor",maca:"Samsung",Modelo:"30 pulgadas curvo",Precio:60000}

];

function nuevoPorducto(codigo,tipo,marca,modelo,precio){

    this.codigo=codigo,
    this.tipo=tipo,
    this.marca=marca,
    this.modelo=modelo,
    this.precio=parseFloat(precio),
    this.detallesGenerales=()=>{console.log("Codigo del producto:"+this.codigo  + "n\Tipo:"+this.tipo+"n\marca:"+this.marca+"n\Modelo:"+this.modelo +"n\Precio:"+this.precio)}
};

function agregarProducto(producto){
    productos.push(producto);
}
// de esta froma agregamos y creamos producto a nuestro array 
agregarProducto(new nuevoPorducto(5,"motherboard","MSI","z-270",50000)); 


const carrito=[];

do {
    let codigoProducto=prompt("ingrese condigo de producto para agregar al carrito 1)para gpu-msi- \n 2)monitor-msi-27Pulgadas 2ms \n3)gpu-asus-gtx4080\n4)monitor-samsung-20Pulgadas Curvo\n5)motherboard-msi-z270");


    switch(codigoProducto){
  
        case "1":
            carrito.push(productos[0]);
           
            break;1

        case "2":
            carrito.push(productos[1]);
            break;
        case "3":
            carrito.push(productos[2]);
            break;
         case "4":
            carrito.push(productos[3]);
             break;    
         case "5":
            carrito.push(productos[4]);
            break;         
        default:
            alert("no se selecionno una opcion correcta")
            break;
    }
   

    let continuar= true;
    let volver=prompt("¿deseas vovler a calcular cargar otro producto?");
    if(volver== "NO"|| volver=="No" || volver=="no"){
        continuar= false;
    };
 
 }while(continuar);  //main.js:63 Uncaught ReferenceError: continuar is not definedat main.js:63:9


 do {
    let codigoProducto=prompt("ingrese condigo de producto a eliminar del carrito 1)para gpu-msi- \n 2)monitor-msi-27Pulgadas 2ms \n3)gpu-asus-gtx4080\n4)monitor-samsung-20Pulgadas Curvo\n5)motherboard-msi-z270");


    switch(codigoProducto){
  
        case "1":
            carrito.splice(0,1);
           
            break;

        case "2":
            carrito.splice(1,1);
            break;
        case "3":
            carrito.splice(2,1);
            break;
         case "4":
            carrito.splice(3,1);
             break;    
         case "5":
            carrito.splice(4,1);
            break;         
        default:
            alert("no se selecionno una opcion correcta")
            break;
    }
   

    let continuar= true;
    let volver=prompt("¿deseas vovler a aliminar un producto del carrito ?")
    if(volver== "NO"|| volver=="No" || volver=="no"){
        continuar= false;
    };
 
 }while(continuar);

console.log("Listado del carrito");

const nombres= carrito.map(el=>{
    return carrito.nombre
}); 
// imprimir  solos los nombres de los productos
console.log(nomrbes)
// imprimir solor los precios
const precios= carrito.map(el=>{
    return carrito.Precio;
}); 

const total= carrito.reduce((scc,el)=>{
    return acc+el.Precio;
},0)
console.log("total de la compra es de "+total)

const ul=document.getElementById("lista");

for (const productosC of carrito) {
    let li =document.createElement("li")

    li.innerHTML="<h3>${productosC.codigo} ${productosC.tipo}</h3><p>${productosC.marca}</p><p>${productosC.Modelo}</p><p>${productosC.cPrecio}</p>";
    ul.append(li);
}


