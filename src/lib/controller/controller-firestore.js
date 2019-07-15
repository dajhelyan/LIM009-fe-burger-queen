// funcion para traer datos de firestore

export const getBreakfastData = () => {
    const db = firebase.firestore();

    return db.collection("desayuno")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                return doc.data();

                // console.log(`${doc.id} => ${doc.data()}`);
                // console.log(doc.data().producto)
            });
        });
}

export const getLunchData = () => {
    const db = firebase.firestore();

    return db.collection("almuerzo")
        .get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                return doc.data();
            });
        });
}