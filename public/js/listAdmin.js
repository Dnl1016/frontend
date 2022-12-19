function getUsuarios(done) {


    const url = "http://localhost/redaliados/backend/public/usuarios";
    var headers = {}
    
    fetch(url, {
        method : "GET",
        mode: 'cors',
        headers: headers
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(response.error)
        }
        return response.json();
    })
    .then(data => {
        // document.getElementById('messages').value = data.messages;
    })
    .catch(function(error) {
        // document.getElementById('messages').value = error;
    });


    // return await fetch("http://localhost/redaliados/backend/public/usuarios", {
    //     method: 'GET',
    //     crossorigin: true,
    //     mode: 'no-cors',
    // }).then((res) => res.json())  
    // .then((data) => {  
    //   console.log(data);  
    // })  
    // .catch((error) => {  
    //   console.error(error);  
    // });
    
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