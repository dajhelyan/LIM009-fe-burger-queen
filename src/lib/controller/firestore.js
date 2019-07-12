// funcion para traer datos de firestore

//cambiar nombre a controller-firebase
 export const obtenerDta = () => {
    const db = firebase.firestore();
     
   return db.collection("desayuno")
        .get()
        .then((querySnapshot) => {
            const arrDesayuno = [];
            querySnapshot.forEach((doc) => {
           
                const obj = {
                id: doc.id,
                producto: doc.data().producto,
                precio: doc.data().precio
            }
            arrDesayuno.push(obj);
            
               
            });
            return arrDesayuno;
        });
}