const mostrar = () => {

   

    db.collection("usuarios").get().then((querySnapshot) => {
        let table = `<table border='1'>
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>`;
        querySnapshot.forEach((doc) => {
            table += `<tr>`;
            
            table+=`<td>${doc.data().nombre}</td>`;
            table+=`<td>${doc.data().email}</td>`;
            
            // document.querySelector(".mostrar").innerHTML =`${doc.data().email}`;
            table+=`</tr>`;
        }); 

    table += `</tbody></table>`;
    document.querySelector(".mostrar").innerHTML = table;
    });
    
}