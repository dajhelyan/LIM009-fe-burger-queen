
 export const obtenerDataDesayuno = () => {
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