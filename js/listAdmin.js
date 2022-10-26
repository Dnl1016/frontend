function getUsuarios(done) {

    const results= fetch("http://localhost/redaliados/backend/public/usuarios");

    results
    .then(response=>response.json())
    .then(data=>{
        done(data)
    });
    
}
getUsuarios(data =>{
    console.log(data);
});