function guardar() {
    db.collection("usuarios").add({
        nombre: document.querySelector("#nombre").value,
        email: document.querySelector("#email").value
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}
  

document.querySelector("#guardar").addEventListener("click", (e) => {
    e.preventDefault();
   guardar();
   mostrar();
})