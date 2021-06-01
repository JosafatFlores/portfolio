import { db } from "./firebaseConfig";

const getColletion = async (collectionName)  => {
    await db.collection(collectionName).onSnapshot((querySnashot) => {
        const dataArray = []

        querySnashot.forEach((doc) => {
            dataArray.push({ ...doc.data(), id: doc.id })
        })

        return dataArray
    })
}

export default getColletion