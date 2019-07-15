// funcion para traer datos de firestore

//cambiar nombre a controller-firebase
export const obtenerDta = () => {
    const db = firebase.firestore();

    return db.collection("desayuno")
        .get()
        .then((querySnapshot) => {
            const arrDesayuno = [];
            querySnapshot.forEach((doc) => {
                console.log(querySnapshot, 'ee')
                const obj = {
                    id: doc.id,
                    producto: doc.data().producto,
                    precio: doc.data().precio
                }
                arrDesayuno.push(obj);
            });
            console.log(arrDesayuno)
            return arrDesayuno;
        });
}

export const getLunchData = () => {
    const db = firebase.firestore();

    return db.collection("almuerzos")
    .get()
    .then((querySnapshot) => {
        const arrLunchData = [];
        querySnapshot.forEach((doc) => {

            const objDataLunch = {
                id: doc.id,
                producto: doc.data().producto,
                precio: doc.data().precio
            }
            console.log(objDataLunch, 'd')
            arrLunchData.push(objDataLunch);
        });
        console.log(arrLunchData, 'w')
        return arrLunchData;
    });
}