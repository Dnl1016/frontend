const express = require ('express')
const app =express();


const port = 3000

// Motor de plantilla
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"))

app.get('/',(req, res)=>{
    res.render("home",)
})

app.use((req, res, next)=>{
    res.status(404).render("404",{
        titulo:"404",
        descripcion:"Pagina no encontrada"
    })
})



app.listen (port,()=>{
    console.log('servidor a su servicio en el puerto', port)
})