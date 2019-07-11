// funcion para traer datos de firestore


 export const obtenerDta = () => {
    const db = firebase.firestore();
     
   return db.collection("desayuno")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               return doc.data()
            
                // console.log(`${doc.id} => ${doc.data()}`);
                // console.log(doc.data().producto)
            });
        });
}