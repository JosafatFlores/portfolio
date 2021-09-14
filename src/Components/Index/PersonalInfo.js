import React, { useEffect, useState } from 'react'
import { db } from "../../Services/Firebase/firebaseConfig";

export const PersonalInfo = () => {
    const [iAm, setIAm] = useState("")
    const [carrer, setCarrer] = useState("")

    useEffect(() => {
        getPersonalInfo()
    }, [])

    const getPersonalInfo = () => {
        db.collection("personalnfo").onSnapshot((querySnashot) => {

            const personalInfo = []

            querySnashot.forEach((doc) => {
                personalInfo.push({ ...doc.data(), id: doc.id })
            })

            setIAm(personalInfo[0].iAm)
            setCarrer(personalInfo[0].carrer)
        })
    }

    return(
        <>
            <div className="main-personal">
                <div className="main__info iam">
                    <h2>¿Quien soy?</h2>
                    <p>{ iAm }</p>
                    </div>
                <div className="main__info carrer">
                    <h2>Carrera profesional</h2>
                    <p>{ carrer }</p>
                    </div>
            </div>
        </>
    )
}
