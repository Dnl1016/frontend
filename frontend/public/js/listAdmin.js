function getUsuarios(done) {

    fetch("http://localhost/redaliados/backend/public/usuarios", {
        
        method: "GET",
        headers: {
            accept: "application/json"
        }
    }).then(response => {
        console.log(response)
        response.json()
    })
    .then(data => {
        console.log(data)
        done(data)
    }).catch(error => {
        console.error("There was an error!", error);
      });
    
}
getUsuarios(data =>{
    console.log(data);
    // data.results.forEach(usuario => {
    //     const tr = document.createRange().createContextualFragment(
    //     `<tr>
    //     <td>${usuario.id}</td>
    //     <td>${usuario.id}</td>
    //     <td>${usuario.id}</td>
    //     <td>${usuario.id}</td>
    //     <td>${usuario.id}</td>
    //     <td>${usuario.id}</td>
    //     <td>${usuario.id}</td>
    //     <td>${usuario.id}</td>
    //     <td>${usuario.id}</td>
        
    //     </tr>`

    //     );
    //     const main
    //     = document.querySelector("main");

    //     main.append(tr)
        
    // });
});