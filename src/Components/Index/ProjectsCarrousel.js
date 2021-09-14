import React, { useEffect, useState } from "react";
import { db } from "../../Services/Firebase/firebaseConfig";

import Slider from "react-slick";

export const ProjectsCarrousel = () => {
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

    const settings = {
        infinite: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplaySpeed: 3000,
                    autoplay: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplaySpeed: 3000,
                    autoplay: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    autoplaySpeed: 3000,
                    autoplay: true
                }
            }
        ]
    };
    return (
        <>
            {
                projectsArray.length > 0
                    ? <div className="main-slider">
                        <h1>Projectos Realizados</h1>
                        <Slider {...settings}>
                            {
                                projectsArray.map((project) => {
                                    return <ProjectCard props={project} />
                                })
                            }
                        </Slider>
                    </div>
                    : <div></div>
            }
        </>
    )
}

const ProjectCard = (props) => {
    return (
        <>
            <div className="project-card">
                <img src={props.props.icon} alt="" />
                <span>{props.props.name}</span>
            </div>
        </>
    )
}   