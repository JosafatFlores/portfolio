import React, { useEffect, useState } from "react";
import './index.scss'
import { db } from "../../firebaseConfig";

const Projects = () => {

    const [projectsArray, setProjects] = useState([])

    const getProjects = () => {
        db.collection("projects").onSnapshot((querySnashot) => {
            const projectsArray = []

            querySnashot.forEach((doc) => {
                projectsArray.push({ ...doc.data(), id: doc.id })
            })
            setProjects(projectsArray)
        })
    }

    useEffect(() => {
        getProjects();
    }, []);

    return (
        <>
            <div className="container">
                {
                    projectsArray.map((project, index) => {
                        return <div className="container__div">
                                    <img src={project.icon} alt="" className="container__div-img"/>
                                    <h1 className="container__div-h1" key={project.id}>{project.name}</h1>
                                    <p className="container__div-p">{project.description}</p>
                                </div>

                    })
                }
            </div>

        </>
    )
}

export default Projects;