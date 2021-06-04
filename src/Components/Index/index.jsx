import React, { useEffect, useState } from 'react'
import { db } from "../../Services/Firebase/firebaseConfig";
import ReactTextTransition, { presets } from "react-text-transition";
import './index.scss'

const Index = () => {

    const [photo, setPhoto] = useState("")
    const [description, setDescription] = useState("")
    const [skills, setSkils] = useState([])
    const [index, setIndex] = useState(0);

    useEffect(() => {
        getPersonalInfo()
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            5000
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
                    skills.length != 0
                        ? <ReactTextTransition
                            className="main__textTransition"
                            text={skills[index % skills.length]}
                            springConfig={presets.wobbly}
                            style={{display:'inline-block'}}
                        />
                        : <p>Ingeniero en Sistemas Computacionales</p>
                }

            </div>

        </div>
    )
}

export default Index