import { useState, useEffect, useRef } from 'react'
import { db } from "../Services/Firebase/firebaseConfig";

export const useFetchFirebase = (collection = "") => {
    const isMounted = useRef(true)
    const [state, setstate] = useState({ data: null, loading: true })

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        setstate({ data: null, loading: true})

        db.collection(collection).onSnapshot((querySnashot) => {

            const arrayData = []

            querySnashot.forEach((doc) => {
                arrayData.push({ ...doc.data(), id: doc.id })
            })

            if (isMounted.current) {
                setstate({
                    data: arrayData,
                    loading: false
                })
            }

        })

    }, [collection])


    return state;

}
