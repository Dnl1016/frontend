function getUsuarios(done) {

    const results= fetch("http://localhost/redaliados/backend/public/usuarios");

    results
    .then(response=>response.json())
    .then(data=>{
        done(data)
    });
    
}
getUsuarios(data =>{
    // console.log(data);
    data.results.forEach(usuario => {
        const tr = document.createRange().createContextualFragment(
        `<tr>
        <td>${usuario.id}</td>
        <td>${usuario.id}</td>
        <td>${usuario.id}</td>
        <td>${usuario.id}</td>
        <td>${usuario.id}</td>
        <td>${usuario.id}</td>
        <td>${usuario.id}</td>
        <td>${usuario.id}</td>
        <td>${usuario.id}</td>
        
        </tr>`

        );
        const main
        = document.querySelector("main");

        main.append(tr)
        
    });
});