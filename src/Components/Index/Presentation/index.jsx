import React, { useEffect, useState } from 'react'
import { db } from "../../../Services/Firebase/firebaseConfig";
import ReactTextTransition, { presets } from "react-text-transition";
import './index.scss'

const Presentation = () => {

    const [photo, setPhoto] = useState("")
    const [description, setDescription] = useState("")
    const [skills, setSkils] = useState([])
    const [presentation, setPresentation] = useState(0);

    useEffect(() => {
        getPersonalInfo()
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() =>
            setPresentation(presentation => presentation + 1),
            3000
        );
        return () => clearTimeout(intervalId);
    }, [])


    const getPersonalInfo = () => {
        db.collection("personalnfo").onSnapshot((querySnashot) => {

            const skills = []

            querySnashot.forEach((doc) => {
                skills.push({ ...doc.data(), id: doc.id })
            })

            setPhoto(skills[0].photo)
            setDescription(skills[0].description)
            setSkils(skills[0].skills)
        })
    }


    return (
        <div className="main">
            <img src={photo} alt="" />
            <div className="main__div">

            </div>
            <div className="main__div">
                <p>{description}</p>
                {
                    skills.length !== 0
                        ? <ReactTextTransition
                            className="main__textTransition"
                            text={skills[presentation % skills.length]}
                            springConfig={presets.gentle}
                            style={{display:'inline-block', whiteSpace: 'nowrap'}}
                        />
                        : <p>Ingeniero en Sistemas Computacionales</p>
                }

            </div>

        </div>
    )
}

export default Presentation