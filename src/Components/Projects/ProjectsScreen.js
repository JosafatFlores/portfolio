
import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AliceCarousel from 'react-alice-carousel';
import { Link, BrowserRouter } from 'react-router-dom'
import "react-alice-carousel/lib/alice-carousel.css";
import { useFetchFirebase } from "../../hooks/useFetchFirebase";

export const ProjectsScreen = () => {

    const { data: projects, loading } = useFetchFirebase('projects')

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [project, setProject] = React.useState({
        name: "",
        icon: "",
        description: "",
        images: []
    });

    const handleClickOpen = (scrollType, project) => () => {
        setProject(project)
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const descriptionElementRef = React.useRef(null);

    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    return (
        <>
            {(loading)
                ? <div className="loader">
                    <ReactLoading type={'spinningBubbles'} color='white' height={100} width={100} />
                </div>
                : <div className="container">
                    {
                        projects.map((project) => {
                            return <div className="container__div">
                                <img
                                    src={project.icon}
                                    alt=""
                                    className="container__div-img"
                                    onClick={handleClickOpen('paper', project)}
                                />
                                <h1 className="container__div-h1" key={project.id}>{project.name}</h1>
                            </div>
                        })
                    }
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        scroll={scroll}
                        aria-labelledby="scroll-dialog-title"
                        aria-describedby="scroll-dialog-description"
                    >
                        <DialogTitle id="scroll-dialog-title">{project.name}</DialogTitle>
                        <DialogContent dividers={scroll === 'paper'}>
                            <DialogContentText
                                id="scroll-dialog-description"
                                ref={descriptionElementRef}
                                tabIndex={-1}
                            >
                                <div className="dialog-container">
                                    <p>{project.description}</p>
                                    <div className="dialog-container__info">
                                        <b>Plataforma: {project.platform}</b>
                                        <b>Lenguaje: {project.lenguage}</b>
                                    </div>
                                    {
                                        project.images.length > 0
                                            ? <div className="dialog-container__images">
                                                <AliceCarousel autoPlay autoPlayInterval="3000" infinite="true">
                                                    {project.images.map(image => (
                                                        <img src={image} className="sliderimg" alt="" />
                                                    ))}
                                                </AliceCarousel>
                                            </div>
                                            : <h5>Aun no se han cargado imagenes :c</h5>
                                    }
                                    {

                                        project.gitURL
                                            ? <LinkComponent url={project.gitURL} />
                                            : null
                                    }
                                </div>
                            </DialogContentText>
                        </DialogContent>
                    </Dialog>
                </div>
            }
        </>
    )
}

const LinkComponent = ({ url }) => {
    return (
        <>
            <BrowserRouter>
                <Link to={{ pathname: url }} target='_blank'>GitLab</Link>
            </BrowserRouter>
        </>
    )
}