import React from "react";

import Slider from "react-slick";

export const ProjectsCarrousel = ({ projects } = {}) => {

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
        <section className="wow">
            {
                projects.length > 0
                && <div className="main-slider animate__animated animate__fadeInUp">
                    <h1>Projectos Realizados</h1>
                    <Slider {...settings}>
                        {
                            projects.map((project, index) => {
                                return <ProjectCard key={index} props={project} />
                            })
                        }
                    </Slider>
                </div>
            }
        </section>
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