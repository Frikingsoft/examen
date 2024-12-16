import readline from 'readline'
// Configurar la interfaz de readline para interactuar con el usuario
const leer_datos = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let opcion

// Solicitar al usuario que ingrese algo
const menu = ()=>{
  leer_datos.question(
    `Ingrese la opcion correcta :
    1) Ingresar usuario
    2) Ingresar producto
    3) borrar usuario
    4) borrar producto
    5) salir
    `, (respuesta) => {
      opcion = respuesta   
      console.log("la opcion elegida es :" + opcion)
      opcion!=5 
      ? menu()
      : leer_datos.close() // Cerrar la interfaz después de capturar la respuesta
     
      
  })
  
}

menu()
